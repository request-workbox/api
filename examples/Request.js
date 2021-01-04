const requestWorkbox = require('../index');
const RequestWorkbox = requestWorkbox({
    apiKey: '',
    projectId: '',
})

const init = async function() {
    try {

        const { Request } = RequestWorkbox

        // const newRequest = await Request.createRequest()
        // const newRequest = {
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     url: 'https://api.requestworkbox.com',
        //     name: 'Sample Request',
        //     method: 'GET',
        //     active: true,
        //     projectId: '5ff248eddf605f047e7158ef',
        //     authorization: [
        //       {
        //         _id: '5ff24e2d30770c07fd9bdbdc',
        //         active: true,
        //         key: 'username',
        //         value: '',
        //         valueType: 'textInput'
        //       },
        //       {
        //         _id: '5ff24e2d30770c07fd9bdbdd',
        //         active: true,
        //         key: 'password',
        //         value: '',
        //         valueType: 'textInput'
        //       }
        //     ],
        //     authorizationType: 'noAuth',
        //     query: [
        //       {
        //         _id: '5ff24e2d30770c07fd9bdbde',
        //         active: true,
        //         key: '',
        //         value: '',
        //         valueType: 'textInput'
        //       }
        //     ],
        //     headers: [
        //       {
        //         _id: '5ff24e2d30770c07fd9bdbdf',
        //         active: true,
        //         key: '',
        //         value: '',
        //         valueType: 'textInput'
        //       }
        //     ],
        //     body: [
        //       {
        //         _id: '5ff24e2d30770c07fd9bdbe0',
        //         active: true,
        //         key: '',
        //         value: '',
        //         valueType: 'textInput'
        //       }
        //     ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-03T23:07:25.471Z',
        //     updatedAt: '2021-01-03T23:07:25.928Z'
        //   }
        
        // const request = await Request.getRequest({
        //     requestId: '5ff24e2d30770c07fd9bdbdb'
        // })
        // const request = {
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     url: 'https://api.requestworkbox.com',
        //     name: 'Sample Request',
        //     method: 'GET',
        //     active: true,
        //     projectId: '5ff248eddf605f047e7158ef',
        //     authorization: [ [Object], [Object] ],
        //     authorizationType: 'noAuth',
        //     query: [ [Object] ],
        //     headers: [ [Object] ],
        //     body: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-03T23:07:25.471Z',
        //     updatedAt: '2021-01-03T23:07:25.928Z'
        // }

        // const requests = await Request.listRequests()
        // const requests = [
        //     {
        //       _id: '5ff24e2d30770c07fd9bdbdb',
        //       url: 'https://api.requestworkbox.com',
        //       name: 'Sample Request',
        //       method: 'GET',
        //       active: true,
        //       projectId: '5ff248eddf605f047e7158ef',
        //       authorization: [ [Object], [Object] ],
        //       authorizationType: 'noAuth',
        //       query: [ [Object] ],
        //       headers: [ [Object] ],
        //       body: [ [Object] ],
        //       lockedResource: false,
        //       preventExecution: false,
        //       sensitiveResponse: false,
        //       createdAt: '2021-01-03T23:07:25.471Z',
        //       updatedAt: '2021-01-03T23:07:25.928Z'
        //     }
        //   ]

        // const request = await Request.saveRequestChanges({
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     name: 'Request Workbox API'
        // })
        // const request = {
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     url: 'https://api.requestworkbox.com',
        //     name: 'Request Workbox API',
        //     method: 'GET',
        //     active: true,
        //     projectId: '5ff248eddf605f047e7158ef',
        //     authorization: [ [Object], [Object] ],
        //     authorizationType: 'noAuth',
        //     query: [ [Object] ],
        //     headers: [ [Object] ],
        //     body: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-03T23:07:25.471Z',
        //     updatedAt: '2021-01-03T23:29:23.940Z'
        //   }

        // const request = await Request.addRequestDetailItem({
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     requestDetailOption: 'headers'
        // })
        // const request = {
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     url: 'https://api.requestworkbox.com',
        //     name: 'Request Workbox API',
        //     method: 'GET',
        //     active: true,
        //     projectId: '5ff248eddf605f047e7158ef',
        //     authorization: [ [Object], [Object] ],
        //     authorizationType: 'noAuth',
        //     query: [ [Object] ],
        //     headers: [ [Object], [Object] ],
        //     body: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-03T23:07:25.471Z',
        //     updatedAt: '2021-01-03T23:29:23.940Z'
        //   }

        // const request = await Request.deleteRequestDetailItem({
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     requestDetailOption: 'headers',
        //     requestDetailItemId: '5ff2540ea3e6e409c321f9e0',
        // })
        // const request = {
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     url: 'https://api.requestworkbox.com',
        //     name: 'Request Workbox API',
        //     method: 'GET',
        //     active: true,
        //     projectId: '5ff248eddf605f047e7158ef',
        //     authorization: [ [Object], [Object] ],
        //     authorizationType: 'noAuth',
        //     query: [ [Object] ],
        //     headers: [ [Object] ],
        //     body: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-03T23:07:25.471Z',
        //     updatedAt: '2021-01-03T23:32:30.821Z'
        //   }

        // const request = await Request.archiveRequest({
        //     requestId: '5ff24e2d30770c07fd9bdbdb'
        // })
        // const request = {
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     url: 'https://api.requestworkbox.com',
        //     name: 'Request Workbox API',
        //     method: 'GET',
        //     active: false,
        //     projectId: '5ff248eddf605f047e7158ef',
        //     authorization: [ [Object], [Object] ],
        //     authorizationType: 'noAuth',
        //     query: [ [Object] ],
        //     headers: [ [Object] ],
        //     body: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-03T23:07:25.471Z',
        //     updatedAt: '2021-01-03T23:35:39.204Z'
        //   }

        // const request = await Request.restoreRequest({
        //     requestId: '5ff24e2d30770c07fd9bdbdb'
        // })
        // const request = {
        //     _id: '5ff24e2d30770c07fd9bdbdb',
        //     url: 'https://api.requestworkbox.com',
        //     name: 'Request Workbox API',
        //     method: 'GET',
        //     active: true,
        //     projectId: '5ff248eddf605f047e7158ef',
        //     authorization: [ [Object], [Object] ],
        //     authorizationType: 'noAuth',
        //     query: [ [Object] ],
        //     headers: [ [Object] ],
        //     body: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-03T23:07:25.471Z',
        //     updatedAt: '2021-01-03T23:36:45.059Z'
        //   }

    } catch(err) {
        console.log('Test error', err.message)
    }
}

init()