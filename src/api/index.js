const 
    request = require('./request');

module.exports = function(state) {
    if (!state.$axios) throw new Error('Missing axios instance.')

    return {
        Request: request(state),
    }
}