const 
    ValidateRequest = require('../validate/Request');

module.exports = function(state) {
    const { $axios } = state

    return {
        createRequest: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.createRequest.validate(snapshot, options)
                const request = await ValidateRequest.createRequest.request($axios, payload)
                return ValidateRequest.createRequest.response(request)
            } catch(err) {
                return ValidateRequest.createRequest.error(err)
            }
        },
        listRequests: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.listRequests.validate(snapshot, options)
                const request = await ValidateRequest.listRequests.request($axios, payload)
                return ValidateRequest.listRequests.response(request)
            } catch(err) {
                return ValidateRequest.listRequests.error(err)
            }
        },
        getRequest: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.getRequest.validate(snapshot, options)
                const request = await ValidateRequest.getRequest.request($axios, payload)
                return ValidateRequest.getRequest.response(request)
            } catch(err) {
                return ValidateRequest.getRequest.error(err)
            }
        },
        saveRequestChanges: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.saveRequestChanges.validate(snapshot, options)
                const request = await ValidateRequest.saveRequestChanges.request($axios, payload)
                return ValidateRequest.saveRequestChanges.response(request)
            } catch(err) {
                return ValidateRequest.saveRequestChanges.error(err)
            }
        },
        addRequestDetailItem: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.addRequestDetailItem.validate(snapshot, options)
                const request = await ValidateRequest.addRequestDetailItem.request($axios, payload)
                return ValidateRequest.addRequestDetailItem.response(request)
            } catch(err) {
                return ValidateRequest.addRequestDetailItem.error(err)
            }
        },
        deleteRequestDetailItem: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.deleteRequestDetailItem.validate(snapshot, options)
                const request = await ValidateRequest.deleteRequestDetailItem.request($axios, payload)
                return ValidateRequest.deleteRequestDetailItem.response(request)
            } catch(err) {
                return ValidateRequest.deleteRequestDetailItem.error(err)
            }
        },
        archiveRequest: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.archiveRequest.validate(snapshot, options)
                const request = await ValidateRequest.archiveRequest.request($axios, payload)
                return ValidateRequest.archiveRequest.response(request)
            } catch(err) {
                return ValidateRequest.archiveRequest.error(err)
            }
        },
        restoreRequest: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateRequest.restoreRequest.validate(snapshot, options)
                const request = await ValidateRequest.restoreRequest.request($axios, payload)
                return ValidateRequest.restoreRequest.response(request)
            } catch(err) {
                return ValidateRequest.restoreRequest.error(err)
            }
        },
    }
}