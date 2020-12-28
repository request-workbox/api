const 
    listInstances = require('./InstanceListInstances'),
    getInstance = require('./InstanceGetInstance'),
    getInstanceUsage = require('./InstanceGetInstanceUsage'),
    downloadInstanceStat = require('./InstanceDownloadInstanceStat');

module.exports = {
    listInstances,
    getInstance,
    getInstanceUsage,
    downloadInstanceStat,
}