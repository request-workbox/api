const 
    createWorkflow = require('./WorkflowCreateWorkflow'),
    listWorkflows = require('./WorkflowListWorkflows'),
    getWorkflow = require('./WorkflowGetWorkflow'),
    saveWorkflowChanges = require('./WorkflowSaveWorkflowChanges'),
    addWorkflowTask = require('./WorkflowAddWorkflowTask'),
    deleteWorkflowTask = require('./WorkflowDeleteWorkflowTask'),
    archiveWorkflow = require('./WorkflowArchiveWorkflow'),
    restoreWorkflow = require('./WorkflowRestoreWorkflow');

module.exports = {
    createWorkflow,
    listWorkflows,
    getWorkflow,
    saveWorkflowChanges,
    addWorkflowTask,
    deleteWorkflowTask,
    archiveWorkflow,
    restoreWorkflow,
}