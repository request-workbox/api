const 
    validateRequest = require('../validate/request');

module.exports = function(state) {
    const { $axios } = state

    return {
        createRequest: async function(options) {
            try {

                const snapshot = state
                const payload = validateRequest.createRequest.validate(snapshot, options)
                const request = await validateRequest.createRequest.request($axios, payload)

                return validateRequest.createRequest.response(request)
            } catch(err) {
                return validateRequest.createRequest.error(err)
            }
        },
    }
}