const 
    createStorage = require('./StorageCreateStorage'),
    listStorages = require('./StorageListStorages'),
    getStorage = require('./StorageGetStorage'),
    getStorageData = require('./StorageGetStorageData'),
    getStorageUsage = require('./StorageGetStorageUsage'),
    updateTextStorageData = require('./StorageUpdateTextStorageData'),
    saveStorageChanges = require('./StorageSaveStorageChanges'),
    archiveStorage = require('./StorageArchiveStorage'),
    restoreStorage = require('./StorageRestoreStorage');
    

module.exports = {
    createStorage,
    listStorages,
    getStorage,
    getStorageData,
    getStorageUsage,
    updateTextStorageData,
    saveStorageChanges,
    archiveStorage,
    restoreStorage,
}