const 
    _ = require('lodash');

module.exports = {
    createRequest: {
        validate: function(state, options) {
            let projectId;
    
            if (!options.projectId || options.projectId === '') {
                if (!state.projectId || state.projectId === '') throw new Error('Missing project id.')
                projectId = state.projectId
            } else {
                projectId = options.projectId
            }
            
            const payload = {
                url: '/create-request',
                data: { projectId }
            }
            console.log('validated new request', payload)

            return payload
        },
        request: async function(axios, payload) {
            try {
                const newRequest = await axios({
                    url: payload.url,
                    data: payload.data,
                })
                console.log('created new request', newRequest)

                return newRequest
            } catch(err) {
                throw new Error(err)
            }
        },
        response: function(request) {
            const response = _.pickBy(request.data, ['_id','url','active','project','query','headers','body','createdAt','updatedAt'])
            console.log('returning new request', response)

            return response
        },
        error: function(err) {
            console.log('new request error', err)
            
            return err
        },
    }
}