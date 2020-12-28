const 
    createStorage = require('./WorkflowCreateWorkflow'),
    listStorages = require('./WorkflowListWorkflows'),
    getStorage = require('./WorkflowGetWorkflow'),
    getTextStorageData = require('./WorkflowSaveWorkflowChanges'),
    getFileStorageData = require('./WorkflowAddWorkflowTask'),
    updateTextStorageData = require('./WorkflowDeleteWorkflowTask'),
    updateFileStorageData = require('./WorkflowArchiveWorkflow'),
    saveStorageChanges = require('./WorkflowRestoreWorkflow'),
    archiveStorage = require('./WorkflowRestoreWorkflow'),
    restoreStorage = require('./WorkflowRestoreWorkflow'),
    getStorageUsage = require('./WorkflowRestoreWorkflow');

module.exports = {
    createStorage,
    listStorages,
    getStorage,
    getTextStorageData,
    getFileStorageData,
    updateTextStorageData,
    updateFileStorageData,
    saveStorageChanges,
    archiveStorage,
    restoreStorage,
    getStorageUsage,
}