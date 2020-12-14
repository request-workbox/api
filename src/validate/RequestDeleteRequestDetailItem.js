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
        if (!options.requestDetailOption) throw new Error('Missing request detail option.')
        if (!options.requestDetailItemId) throw new Error('Missing request detail item id.')

        if (!_.isHex(options._id)) throw new Error('Incorrect request id type.')
        if (!_.isHex(options.requestDetailItemId)) throw new Error('Incorrect request id type.')
        if (!_.includes(['query','headers','body'], options.requestDetailOption)) {
            throw new Error('Incorrect request detail option type.')
        }

        const payload = {
            url: '/delete-request-detail-item',
            data: {
                _id: options._id,
                requestDetailOption: options.requestDetailOption,
                requestDetailItemId: options.requestDetailItemId,
            }
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