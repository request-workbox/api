const 
    Request = require('./Request');

module.exports = function(state) {
    if (!state.$axios) throw new Error('Missing axios instance.')

    return {
        Request: Request(state),
    }
}