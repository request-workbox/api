const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['_id','name','returnRequest','queueRequest','scheduleRequest','returnWorkflow','queueWorkflow','scheduleWorkflow'],
    keys = ['_id','active','name','owner','projectType','globalWorkflowStatus','workflowCount','workflowLast','usage','usageRemaining','usageTotal','createdAt','updatedAt'],
    permissionKeys = ['returnRequest','returnWorkflow','queueRequest','queueWorkflow','scheduleRequest','scheduleWorkflow'],
    incomingKeys = _.concat(keys, permissionKeys);

module.exports = {
    validate: function(state, options = {}) {

        if (!options._id) throw new Error('Missing project id.')
        if (!_.isHex(options._id)) throw new Error('Incorrect project id type.')

        const payload = {
            url: '/get-project',
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
    response: function(request) {
        const response = _.pick(request.data, incomingKeys)
        return response
    },
    error: function(err) {
        throw new Error(err.message)
    },
}