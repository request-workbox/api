const 
    createProject = require('./ProjectCreateProject'),
    listProjects = require('./ProjectListProjects'),
    listTeamProjects = require('./ProjectListTeamProjects'),
    getProject = require('./ProjectGetProject'),
    updateProject = require('./ProjectUpdateProject'),
    archiveProject = require('./ProjectArchiveProject'),
    restoreProject = require('./ProjectRestoreProject');

module.exports = {
    createProject,
    listProjects,
    listTeamProjects,
    getProject,
    updateProject,
    archiveProject,
    restoreProject,
}