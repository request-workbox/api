const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    });

module.exports = {
    validate: function(state, options = {}) {

        let requestId,
            projectId;

        if (!options.requestId) throw new Error('Missing request id.')
        if (!_.isHex(options.requestId)) throw new Error('Incorrect request id type.')
        requestId = options.requestId

        const payload = {
            url: '/get-request',
            data: { requestId }
        }

        if (state.projectId) projectId = state.projectId
        if (options.projectId) projectId = options.projectId
        if (projectId) {
            if (!_.isHex(projectId)) throw new Error('Incorrect project id type.')
            payload.data.projectId = projectId
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
        const keys = ['_id','url','name','method','active','projectId','authorization','authorizationType','query','headers','body','lockedResource','preventExecution','sensitiveResponse','createdAt','updatedAt']
        const response = _.pickBy(request.data, function(value, key) {
            return _.includes(keys, key)
        })
        return response
    },
    error: function(err) {
        throw new Error(err.message)
    },
}