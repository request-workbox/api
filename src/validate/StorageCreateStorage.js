const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['projectId','storageType'],
    incomingKeys = ['_id','active','name','projectId','storageType','storageValue','mimetype','originalname','size','totalBytesDown','totalBytesUp','totalMs','lockedResource','preventExecution','sensitiveResponse','createdAt','updatedAt'];

module.exports = {
    validate: function(snapshot, incomingOptions = {}) {
        if (!_.isPlainObject(incomingOptions)) throw new Error('Incorrect options type.')
        const options = _.assignIn(snapshot, incomingOptions)

        if (!options.projectId) throw new Error('Missing project id.')
        if (!options.storageType) throw new Error('Missing storage type.')

        if (!_.isHex(options.projectId)) throw new Error('Incorrect project id type.')
        if (!_.isString(options.storageType)) throw new Error('Incorrect storage type.')
        
        const payload = {
            url: '/create-storage',
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
        // Returns object
        const result = _.pick(response.data, incomingKeys)
        return result
    },
    error: function(err) {
        throw new Error(err.message)
    },
}