const 
    Request = require('./Request'),
    Workflow = require('./Workflow'),
    Storage = require('./Storage'),
    Queue = require('./Queue'),
    Instance = require('./Instance');

module.exports = function(state) {
    if (!state.$axios) throw new Error('Missing axios instance.')

    return {
        Request: Request(state),
        Workflow: Workflow(state),
        Storage: Storage(state),
        Queue: Queue(state),
        Instance: Instance(state),
    }
}