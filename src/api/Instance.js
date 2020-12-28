const 
    ValidateInstance = require('../validate/Instance');

module.exports = function(state) {
    const { $axios } = state

    return {
        listInstances: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateInstance.listInstances.validate(snapshot, options)
                const request = await ValidateInstance.listInstances.request($axios, payload)
                return ValidateInstance.listInstances.response(request)
            } catch(err) {
                return ValidateInstance.listInstances.error(err)
            }
        },
        getInstance: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateInstance.getInstance.validate(snapshot, options)
                const request = await ValidateInstance.getInstance.request($axios, payload)
                return ValidateInstance.getInstance.response(request)
            } catch(err) {
                return ValidateInstance.getInstance.error(err)
            }
        },
        getInstanceDetail: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateInstance.getInstanceDetail.validate(snapshot, options)
                const request = await ValidateInstance.getInstanceDetail.request($axios, payload)
                return ValidateInstance.getInstanceDetail.response(request)
            } catch(err) {
                return ValidateInstance.getInstanceDetail.error(err)
            }
        },
        getInstanceUsage: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateInstance.getInstanceUsage.validate(snapshot, options)
                const request = await ValidateInstance.getInstanceUsage.request($axios, payload)
                return ValidateInstance.getInstanceUsage.response(request)
            } catch(err) {
                return ValidateInstance.getInstanceUsage.error(err)
            }
        },
        downloadInstanceStat: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateInstance.downloadInstanceStat.validate(snapshot, options)
                const request = await ValidateInstance.downloadInstanceStat.request($axios, payload)
                return ValidateInstance.downloadInstanceStat.response(request)
            } catch(err) {
                return ValidateInstance.downloadInstanceStat.error(err)
            }
        },
    }
}