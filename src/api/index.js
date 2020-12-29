const 
    Project = require('./Project'),
    Request = require('./Request'),
    Workflow = require('./Workflow'),
    Storage = require('./Storage'),
    Queue = require('./Queue'),
    Instance = require('./Instance');

module.exports = function(state) {
    if (!state.$axios) throw new Error('Missing axios instance.')

    return {
        Project: Project(state),
        Request: Request(state),
        Workflow: Workflow(state),
        Storage: Storage(state),
        Queue: Queue(state),
        Instance: Instance(state),
    }
}