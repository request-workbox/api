const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    });

module.exports = {
    validate: function(state, options = {}) {
        
        let projectId;

        if (!state.projectId && !options.projectId) throw new Error('Missing project id.')
        if (state.projectId) projectId = state.projectId
        if (options.projectId) projectId = options.projectId
        if (!_.isHex(projectId)) throw new Error('Incorrect project id type.')

        const payload = {
            url: '/list-requests',
            data: { projectId }
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
        const response = _.map(request.data, (request) => {
            const responseData = _.pickBy(request, function(value, key) {
                return _.includes(keys, key)
            })
            return responseData
        })
        return response
    },
    error: function(err) {
        throw new Error(err.message)
    },
}