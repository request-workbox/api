const 
    _ = require('lodash'),
    createRequest = require('./RequestCreateRequest'),
    listRequests = require('./RequestListRequests'),
    getRequest = require('./RequestGetRequest'),
    saveRequestChanges = require('./RequestSaveRequestChanges'),
    addRequestDetailItem = require('./RequestAddRequestDetailItem'),
    deleteRequestDetailItem = require('./RequestDeleteRequestDetailItem'),
    archiveRequest = require('./RequestArchiveRequest'),
    restoreRequest = require('./RequestRestoreRequest');

module.exports = {
    createRequest,
    listRequests,
    getRequest,
    saveRequestChanges,
    addRequestDetailItem,
    deleteRequestDetailItem,
    archiveRequest,
    restoreRequest,
}