const 
    createProject = require('./ProjectCreateProject'),
    listProjects = require('./ProjectListProjects'),
    getProject = require('./ProjectGetProject'),
    updateProject = require('./ProjectUpdateProject'),
    archiveProject = require('./ProjectArchiveProject'),
    restoreProject = require('./ProjectRestoreProject');

module.exports = {
    createProject,
    listProjects,
    getProject,
    updateProject,
    archiveProject,
    restoreProject,
}