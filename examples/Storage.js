const requestWorkbox = require('../index');
const RequestWorkbox = requestWorkbox({
    apiKey: '',
    projectId: '',
})

const init = async function() {
    try {

        const { Storage } = RequestWorkbox

        // const storage = await Storage.createStorage({
        //     storageType: 'text'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: true,
        //     name: 'Untitled Storage',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T00:42:30.795Z'
        //   }

        // const storage = await Storage.getStorage({
        //     storageId: '5ff264762e371f0ac8fe8cf8'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: true,
        //     name: 'Untitled Storage',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T00:42:30.795Z'
        //   }

        // const storages = await Storage.listStorages()
        // const storages = [
        //     {
        //       _id: '5ff264762e371f0ac8fe8cf8',
        //       active: true,
        //       name: 'Untitled Storage',
        //       projectId: '5ff248eddf605f047e7158ef',
        //       storageType: 'text',
        //       lockedResource: false,
        //       preventExecution: false,
        //       sensitiveResponse: false,
        //       createdAt: '2021-01-04T00:42:30.795Z',
        //       updatedAt: '2021-01-04T00:42:30.795Z'
        //     }
        //   ]

        // const storage = await Storage.saveStorageChanges({
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     name: 'Mailchimp API Key'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: true,
        //     name: 'Mailchimp API Key',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T00:45:55.233Z'
        //   }

        // const storage = await Storage.archiveStorage({
        //     storageId: '5ff264762e371f0ac8fe8cf8'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: false,
        //     name: 'Mailchimp API Key',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T02:56:40.378Z'
        //   }

        // const storage = await Storage.restoreStorage({
        //     storageId: '5ff264762e371f0ac8fe8cf8'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: true,
        //     name: 'Mailchimp API Key',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T02:57:22.349Z'
        //   }

        // const storage = await Storage.getStorageData({
        //     storageId: '5ff264762e371f0ac8fe8cf8'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: true,
        //     name: 'Mailchimp API Key',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     storageValue: 'MAILCHIMP-API-KEY',
        //     size: 17,
        //     totalBytesDown: 17,
        //     totalBytesUp: 17,
        //     totalMs: 812,
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T03:18:49.183Z'
        //   }

        // const storage = await Storage.getStorageUsage({
        //     storageId: '5ff264762e371f0ac8fe8cf8'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: true,
        //     name: 'Mailchimp API Key',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     size: 17,
        //     totalBytesDown: 34,
        //     totalBytesUp: 17,
        //     totalMs: 1101,
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     usage: [
        //       {
        //         active: true,
        //         _id: '5ff288e5105247033a090b96',
        //         usageType: 'storage',
        //         usageDirection: 'up',
        //         usageAmount: 17,
        //         usageMeasurement: 'byte',
        //         usageLocation: 'api',
        //         usageId: '5ff264762e371f0ac8fe8cf8',
        //         createdAt: '2021-01-04T03:17:57.236Z',
        //         updatedAt: '2021-01-04T03:17:57.236Z'
        //       },
        //     ],
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T03:18:59.568Z'
        //   }

        // const storage = await Storage.updateTextStorageData({
        //     storageId: '5ff264762e371f0ac8fe8cf8',
        //     storageValue: 'MAILCHIMP-API-KEY'
        // })
        // const storage = {
        //     _id: '5ff264762e371f0ac8fe8cf8',
        //     active: true,
        //     name: 'Mailchimp API Key',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     storageType: 'text',
        //     storageValue: 'MAILCHIMP-API-KEY',
        //     size: 17,
        //     totalBytesUp: 17,
        //     totalMs: 396,
        //     lockedResource: false,
        //     preventExecution: false,
        //     sensitiveResponse: false,
        //     createdAt: '2021-01-04T00:42:30.795Z',
        //     updatedAt: '2021-01-04T03:17:57.329Z'
        //   }


    } catch(err) {
        console.log('Test error', err.message)
    }
}

init()