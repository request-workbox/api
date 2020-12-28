const 
    ValidateQueue = require('../validate/Queue');

module.exports = function(state) {
    const { $axios } = state

    return {
        listQueues: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateQueue.listQueues.validate(snapshot, options)
                const request = await ValidateQueue.listQueues.request($axios, payload)
                return ValidateQueue.listQueues.response(request)
            } catch(err) {
                return ValidateQueue.listQueues.error(err)
            }
        },
        archiveAllQueues: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateQueue.archiveAllQueues.validate(snapshot, options)
                const request = await ValidateQueue.archiveAllQueues.request($axios, payload)
                return ValidateQueue.archiveAllQueues.response(request)
            } catch(err) {
                return ValidateQueue.archiveAllQueues.error(err)
            }
        },
        archiveQueue: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateQueue.archiveQueue.validate(snapshot, options)
                const request = await ValidateQueue.archiveQueue.request($axios, payload)
                return ValidateQueue.archiveQueue.response(request)
            } catch(err) {
                return ValidateQueue.archiveQueue.error(err)
            }
        },
    }
}