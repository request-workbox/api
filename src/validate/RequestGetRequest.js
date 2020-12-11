const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    });

module.exports = {
    validate: function(state, options) {
        
        let projectId,
            requestId;

        if (state.projectId || options.projectId) {
            if (_.isHex(state.projectId)) projectId = state.projectId
            if (_.isHex(options.projectId)) projectId = options.projectId
        }

        if (options.requestId) {
            if (_.isHex(options.requestId)) requestId = options.requestId
        }

        const payload = {
            url: '/get-request',
            data: { projectId, requestId, }
        }

        return payload
    },
    request: async function(axios, payload) {
        try {
            const request = await axios(payload)
            return request
        } catch(err) {
            throw new Error(err)
        }
    },
    response: function(request) {
        const response = _.pickBy(request, function(value, key) {
            const keys = ['_id','url','active','project','query','headers','body','createdAt','updatedAt']
            return _.includes(keys, key)
        })
        return response
    },
    error: function(err) {
        return err
    },
}