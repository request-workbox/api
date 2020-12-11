const 
    request = require('./Request');

module.exports = function(state) {
    if (!state.$axios) throw new Error('Missing axios instance.')

    return {
        Request: request(state),
    }
}