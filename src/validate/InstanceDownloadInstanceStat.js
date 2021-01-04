const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['instanceId','statId','projectId'],
    incomingKeys = ['_id','active','projectId','workflowId','workflowName','queueType','queueId','stats','totalBytesDown','totalBytesUp','totalMs','createdAt','updatedAt'];

module.exports = {
    validate: function(snapshot, incomingOptions = {}) {
        if (!_.isPlainObject(incomingOptions)) throw new Error('Incorrect options type.')
        const options = _.assignIn(snapshot, incomingOptions)

        if (!options.instanceId) throw new Error('Missing instance id.')
        if (!options.statId) throw new Error('Missing stat id.')

        if (!_.isHex(options.instanceId)) throw new Error('Incorrect instance id type.')
        if (!_.isHex(options.statId)) throw new Error('Incorrect stat id type.')
        
        const payload = {
            url: '/download-instance-stat',
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