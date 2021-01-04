const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['_id','name','lockedResource','preventExecution','sensitiveResponse'],
    incomingKeys = ['_id','active','name','projectId','storageType','storageValue','mimetype','originalname','size','totalBytesDown','totalBytesUp','totalMs','lockedResource','preventExecution','sensitiveResponse','createdAt','updatedAt'];

module.exports = {
    validate: function(snapshot, incomingOptions = {}) {
        if (!_.isPlainObject(incomingOptions)) throw new Error('Incorrect options type.')
        const options = _.assignIn(snapshot, incomingOptions)

        if (!options._id) throw new Error('Missing storage id.')
        if (!_.isHex(options._id)) throw new Error('Incorrect storage id type.')
        
        const payload = {
            url: '/save-storage-changes',
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