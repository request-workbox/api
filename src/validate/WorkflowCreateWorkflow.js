const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['projectId'],
    incomingKeys = ['_id','active','name','projectId','tasks','payloads','webhooks','lockedResource', 'preventExecution','createdAt','updatedAt'];

module.exports = {
    validate: function(state, options = {}) {

        if (!options.projectId) throw new Error('Missing project id.')
        if (!_.isHex(options.projectId)) throw new Error('Incorrect project id type.')
        
        const payload = {
            url: '/create-workflow',
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
    response: function(request) {
        const response = _.pick(request.data, incomingKeys)
        return response
    },
    error: function(err) {
        throw new Error(err.message)
    },
}