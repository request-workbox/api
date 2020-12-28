const 
    ValidateWorkflow = require('../validate/Workflow');

module.exports = function(state) {
    const { $axios } = state

    return {
        createWorkflow: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.createWorkflow.validate(snapshot, options)
                const request = await ValidateWorkflow.createWorkflow.request($axios, payload)
                return ValidateWorkflow.createWorkflow.response(request)
            } catch(err) {
                return ValidateWorkflow.createWorkflow.error(err)
            }
        },
        listWorkflows: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.listWorkflows.validate(snapshot, options)
                const request = await ValidateWorkflow.listWorkflows.request($axios, payload)
                return ValidateWorkflow.listWorkflows.response(request)
            } catch(err) {
                return ValidateWorkflow.listWorkflows.error(err)
            }
        },
        getWorkflow: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.getWorkflow.validate(snapshot, options)
                const request = await ValidateWorkflow.getWorkflow.request($axios, payload)
                return ValidateWorkflow.getWorkflow.response(request)
            } catch(err) {
                return ValidateWorkflow.getWorkflow.error(err)
            }
        },
        saveWorkflowChanges: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.saveWorkflowChanges.validate(snapshot, options)
                const request = await ValidateWorkflow.saveWorkflowChanges.request($axios, payload)
                return ValidateWorkflow.saveWorkflowChanges.response(request)
            } catch(err) {
                return ValidateWorkflow.saveWorkflowChanges.error(err)
            }
        },
        addWorkflowTask: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.addWorkflowTask.validate(snapshot, options)
                const request = await ValidateWorkflow.addWorkflowTask.request($axios, payload)
                return ValidateWorkflow.addWorkflowTask.response(request)
            } catch(err) {
                return ValidateWorkflow.addWorkflowTask.error(err)
            }
        },
        deleteWorkflowTask: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.deleteWorkflowTask.validate(snapshot, options)
                const request = await ValidateWorkflow.deleteWorkflowTask.request($axios, payload)
                return ValidateWorkflow.deleteWorkflowTask.response(request)
            } catch(err) {
                return ValidateWorkflow.deleteWorkflowTask.error(err)
            }
        },
        archiveWorkflow: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.archiveWorkflow.validate(snapshot, options)
                const request = await ValidateWorkflow.archiveWorkflow.request($axios, payload)
                return ValidateWorkflow.archiveWorkflow.response(request)
            } catch(err) {
                return ValidateWorkflow.archiveWorkflow.error(err)
            }
        },
        restoreWorkflow: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateWorkflow.restoreWorkflow.validate(snapshot, options)
                const request = await ValidateWorkflow.restoreWorkflow.request($axios, payload)
                return ValidateWorkflow.restoreWorkflow.response(request)
            } catch(err) {
                return ValidateWorkflow.restoreWorkflow.error(err)
            }
        },
    }
}