const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['workflowId'],
    incomingKeys = ['_id','active','name','projectId','tasks','payloads','webhooks','lockedResource', 'preventExecution','createdAt','updatedAt'];

module.exports = {
    validate: function(snapshot, incomingOptions = {}) {
        if (!_.isPlainObject(incomingOptions)) throw new Error('Incorrect options type.')
        const options = _.assignIn(snapshot, incomingOptions)

        if (!options.workflowId) throw new Error('Missing workflow id.')
        if (!_.isHex(options.workflowId)) throw new Error('Incorrect workflow id type.')
        
        const payload = {
            url: '/restore-workflow',
            data: _.pick(options, outgoingKeys),
        }

        return payload
    },
    request: async function(axios, payload) {
        try {
            const request = await axios(payload)
            return request
        } catch(err) {
            if (err.response) throw new Error(`${err.response.status} ${err.response.data}`)
            else throw new Error(`${err.message}`)
        }
    },
    response: function(response) {
        // Returns object
        const result = _.pick(response.data, incomingKeys)
        return result
    },
    error: function(err) {
        throw new Error(err.message)
    },
}