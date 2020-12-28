const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['workflowId','date'],
    incomingKeys = ['_id','active','status','stats','instanceId','workflowId','workflowName','storageInstanceId','queueType','date','createdAt','updatedAt'];

module.exports = {
    validate: function(state, options = {}) {

        if (!options.workflowId) throw new Error('Missing workflow id.')
        if (!_.isHex(options.workflowId)) throw new Error('Incorrect workflow id type.')
        
        const payload = {
            url: '/list-queues',
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