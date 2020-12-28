const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['_id','name','url','method','authorization','authorizationType','query','headers','body','lockedResource','preventExecution','sensitiveResponse'],
    incomingKeys = ['_id','url','name','method','active','projectId','authorization','authorizationType','query','headers','body','lockedResource','preventExecution','sensitiveResponse','createdAt','updatedAt'];

module.exports = {
    validate: function(state, options = {}) {

        if (!options.requestId) throw new Error('Missing request id.')
        if (!_.isHex(options.requestId)) throw new Error('Incorrect request id type.')
        
        const payload = {
            url: '/restore-request',
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