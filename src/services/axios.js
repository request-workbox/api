const 
    _ = require('lodash'),
    Axios = require('axios'),
    stagingUrl = 'http://localhost:3000',
    apiUrl = 'https://api.requestworkbox.com';

module.exports = function(apiKey, staging) {
    if (!apiKey || apiKey === '') throw new Error('Missing API Key.')
    if (!_.isString(apiKey)) throw new Error('Incorrect API Key type.')
    if (_.size(apiKey) !== 32) throw new Error('Incorrect API Key type.')

    // Clear auth header on non-requestworkbox domains
    function clearedAuthorizationHeader(config) {
        delete config.headers['x-api-key']
        return config
    }

    // Create axios instance
    const axios = Axios.create({
        baseURL: (staging) ? stagingUrl : apiUrl,
        method: 'post',
    })

    // Add auth header
    axios.interceptors.request.use(function(config) {
        if (staging) {
            if (config.baseURL !== stagingUrl) return clearedAuthorizationHeader(config)
        } else {
            if (config.baseURL !== apiUrl) return clearedAuthorizationHeader(config)
        }

        config.headers['x-api-key'] = apiKey
        return config
    })

    // Return instance
    return axios
}