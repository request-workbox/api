const 
    ValidateProject = require('../validate/Project');

module.exports = function(state) {
    const { $axios } = state

    return {
        createProject: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateProject.createProject.validate(snapshot, options)
                const request = await ValidateProject.createProject.request($axios, payload)
                return ValidateProject.createProject.response(request)
            } catch(err) {
                return ValidateProject.createProject.error(err)
            }
        },
        listProjects: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateProject.listProjects.validate(snapshot, options)
                const request = await ValidateProject.listProjects.request($axios, payload)
                return ValidateProject.listProjects.response(request)
            } catch(err) {
                return ValidateProject.listProjects.error(err)
            }
        },
        listTeamProjects: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateProject.listTeamProjects.validate(snapshot, options)
                const request = await ValidateProject.listTeamProjects.request($axios, payload)
                return ValidateProject.listTeamProjects.response(request)
            } catch(err) {
                return ValidateProject.listTeamProjects.error(err)
            }
        },
        getProject: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateProject.getProject.validate(snapshot, options)
                const request = await ValidateProject.getProject.request($axios, payload)
                return ValidateProject.getProject.response(request)
            } catch(err) {
                return ValidateProject.getProject.error(err)
            }
        },
        updateProject: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateProject.updateProject.validate(snapshot, options)
                const request = await ValidateProject.updateProject.request($axios, payload)
                return ValidateProject.updateProject.response(request)
            } catch(err) {
                return ValidateProject.updateProject.error(err)
            }
        },
        archiveProject: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateProject.archiveProject.validate(snapshot, options)
                const request = await ValidateProject.archiveProject.request($axios, payload)
                return ValidateProject.archiveProject.response(request)
            } catch(err) {
                return ValidateProject.archiveProject.error(err)
            }
        },
        restoreProject: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateProject.restoreProject.validate(snapshot, options)
                const request = await ValidateProject.restoreProject.request($axios, payload)
                return ValidateProject.restoreProject.response(request)
            } catch(err) {
                return ValidateProject.restoreProject.error(err)
            }
        },
    }
}