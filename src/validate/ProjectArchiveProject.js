const 
    _ = require('lodash')
    .mixin({
        isHex: function(string) {
            return /^[a-f0-9]{24}$/.test(string)
        }
    }),
    outgoingKeys = ['projectId'],
    keys = ['_id','active','name','owner','projectType','globalWorkflowStatus','workflowCount','workflowLast','usage','usageRemaining','usageTotal','createdAt','updatedAt'],
    permissionKeys = ['returnRequest','returnWorkflow','queueRequest','queueWorkflow','scheduleRequest','scheduleWorkflow'],
    incomingKeys = _.concat(keys, permissionKeys);

module.exports = {
    validate: function(snapshot, incomingOptions = {}) {
        if (!_.isPlainObject(incomingOptions)) throw new Error('Incorrect options type.')
        const options = _.assignIn(snapshot, incomingOptions)

        if (!options.projectId) throw new Error('Missing project id.')
        if (!_.isHex(options.projectId)) throw new Error('Incorrect project id type.')

        const payload = {
            url: '/archive-project',
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