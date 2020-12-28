const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['_id','taskId'],
    incomingKeys = ['_id','active','name','projectId','tasks','payloads','webhooks','lockedResource', 'preventExecution','createdAt','updatedAt'];

module.exports = {
    validate: function(state, options = {}) {

        if (!options._id) throw new Error('Missing workflow id.')
        if (!options.taskId) throw new Error('Missing task id.')

        if (!_.isHex(options._id)) throw new Error('Incorrect workflow id type.')
        if (!_.isHex(options.taskId)) throw new Error('Incorrect task id type.')
        
        const payload = {
            url: '/delete-workflow-task',
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