const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    });

module.exports = {
    validate: function(state, options = {}) {

        if (!options._id) throw new Error('Missing request id.')
        if (!_.isHex(options._id)) throw new Error('Incorrect request id type.')

        let updates = _.pick(options, ['_id', 'url', 'query', 'headers', 'body'])

        const payload = {
            url: '/save-request-changes',
            data: updates,
        }

        return payload
    },
    request: async function(axios, payload) {
        try {
            const request = await axios(payload)
            return request
        } catch(err) {
            throw new Error(`${err.response.status} ${err.response.data}`)
        }
    },
    response: function(request) {
        const keys = ['_id','url','active','project','query','headers','body','createdAt','updatedAt']
        const response = _.pickBy(request.data, function(value, key) {
            return _.includes(keys, key)
        })
        return response
    },
    error: function(err) {
        return err
    },
}