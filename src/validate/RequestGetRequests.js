const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    });

module.exports = {
    validate: function(state, options) {
        
        let projectId;

        if (state.projectId || options.projectId) {
            if (_.isHex(state.projectId)) projectId = state.projectId
            if (_.isHex(options.projectId)) projectId = options.projectId
        }

        const payload = {
            url: '/get-requests',
            data: { projectId }
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
        const response = _.map(request, (request) => {
            const responseData = _.pickBy(request, function(value, key) {
                const keys = ['_id','url','active','project','query','headers','body','createdAt','updatedAt']
                return _.includes(keys, key)
            })
            return responseData
        })
        return response
    },
    error: function(err) {
        return err
    },
}