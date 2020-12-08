module.exports = function(state) {
    const { $axios } = state

    return {
        newRequest: async function(options) {
            try {
                let projectId;
                
                if (!options.projectId || options.projectId === '') {
                    if (!state.projectId || state.projectId === '') throw new Error('Missing project id.')
                    projectId = state.projectId
                } else {
                    projectId = options.projectId
                }

                const newRequest = await $axios({
                    url: '/new-request',
                    data: { projectId }
                })

                return newRequest
            } catch(err) {
                console.log('New Request Error', newRequest)
                return err
            }
        },
    }
}