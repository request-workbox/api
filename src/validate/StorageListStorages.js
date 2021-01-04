const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['projectId'],
    incomingKeys = ['_id','active','name','projectId','storageType','storageValue','mimetype','originalname','size','totalBytesDown','totalBytesUp','totalMs','lockedResource','preventExecution','sensitiveResponse','createdAt','updatedAt'];

module.exports = {
    validate: function(snapshot, incomingOptions = {}) {
        if (!_.isPlainObject(incomingOptions)) throw new Error('Incorrect options type.')
        const options = _.assignIn(snapshot, incomingOptions)

        if (!options.projectId) throw new Error('Missing project id.')
        if (!_.isHex(options.projectId)) throw new Error('Incorrect project id type.')
        
        const payload = {
            url: '/list-storages',
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
    response: function(response) {
        // Returns array
        const result = _.map(response.data, (response) => {
            response = _.pick(response, incomingKeys)
            return response
        })
        return result
    },
    error: function(err) {
        throw new Error(err.message)
    },
}