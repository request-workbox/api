const requestWorkbox = require('../index');
const RequestWorkbox = requestWorkbox({
    apiKey: '',
    projectId: '',
})

const init = async function() {
    try {

        const { Workflow } = RequestWorkbox

        // const workflow = await Workflow.createWorkflow()
        // const workflow = {
        //     _id: '5ff25ee52e371f0ac8fe8ce9',
        //     active: true,
        //     name: 'Untitled Workflow',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     tasks: [
        //       {
        //         runtimeResultName: '',
        //         _id: '5ff25ee52e371f0ac8fe8cea',
        //         active: true
        //       }
        //     ],
        //     payloads: [ { _id: '5ff25ee52e371f0ac8fe8ceb', active: true } ],
        //     webhooks: [ { _id: '5ff25ee52e371f0ac8fe8cec', active: true } ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     createdAt: '2021-01-04T00:18:45.817Z',
        //     updatedAt: '2021-01-04T00:18:45.817Z'
        //   }

        // const workflow = await Workflow.getWorkflow({
        //     workflowId: '5ff25ee52e371f0ac8fe8ce9'
        // })
        // const workflow = {
        //     _id: '5ff25ee52e371f0ac8fe8ce9',
        //     active: true,
        //     name: 'Untitled Workflow',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     tasks: [ [Object] ],
        //     payloads: [ [Object] ],
        //     webhooks: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     createdAt: '2021-01-04T00:18:45.817Z',
        //     updatedAt: '2021-01-04T00:18:45.817Z'
        //   }

        // const workflows = await Workflow.listWorkflows()
        // const workflows = [
        //     {
        //       _id: '5ff25ee52e371f0ac8fe8ce9',
        //       active: true,
        //       name: 'Untitled Workflow',
        //       projectId: '5ff248eddf605f047e7158ef',
        //       tasks: [ [Object] ],
        //       payloads: [ [Object] ],
        //       webhooks: [ [Object] ],
        //       lockedResource: false,
        //       preventExecution: false,
        //       createdAt: '2021-01-04T00:18:45.817Z',
        //       updatedAt: '2021-01-04T00:18:45.817Z'
        //     }
        //   ]

        // const workflow = await Workflow.saveWorkflowChanges({
        //     _id: '5ff25ee52e371f0ac8fe8ce9',
        //     name: 'Send client email'
        // })
        // const workflow = {
        //       _id: '5ff25ee52e371f0ac8fe8ce9',
        //       active: true,
        //       name: 'Send client email',
        //       projectId: '5ff248eddf605f047e7158ef',
        //       tasks: [ [Object] ],
        //       payloads: [ [Object] ],
        //       webhooks: [ [Object] ],
        //       lockedResource: false,
        //       preventExecution: false,
        //       createdAt: '2021-01-04T00:18:45.817Z',
        //       updatedAt: '2021-01-04T00:23:53.091Z'
        //     }

        // const workflow = await Workflow.addWorkflowTask({
        //     _id: '5ff25ee52e371f0ac8fe8ce9'
        // })
        // const workflow = {
        //     _id: '5ff25ee52e371f0ac8fe8ce9',
        //     active: true,
        //     name: 'Send client email',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     tasks: [
        //       {
        //         runtimeResultName: '',
        //         _id: '5ff25ee52e371f0ac8fe8cea',
        //         active: true
        //       },
        //       {
        //         runtimeResultName: '',
        //         _id: '5ff2606f2e371f0ac8fe8ced',
        //         active: true
        //       }
        //     ],
        //     payloads: [ [Object] ],
        //     webhooks: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     createdAt: '2021-01-04T00:18:45.817Z',
        //     updatedAt: '2021-01-04T00:25:19.617Z'
        //   }

        // const workflow = await Workflow.deleteWorkflowTask({
        //     _id: '5ff25ee52e371f0ac8fe8ce9',
        //     taskId: '5ff2606f2e371f0ac8fe8ced'
        // })
        // const workflow = {
        //     _id: '5ff25ee52e371f0ac8fe8ce9',
        //     active: true,
        //     name: 'Send client email',
        //     projectId: '5ff248eddf605f047e7158ef',
        //     tasks: [
        //       {
        //         runtimeResultName: '',
        //         _id: '5ff25ee52e371f0ac8fe8cea',
        //         active: true
        //       }
        //     ],
        //     payloads: [ [Object] ],
        //     webhooks: [ [Object] ],
        //     lockedResource: false,
        //     preventExecution: false,
        //     createdAt: '2021-01-04T00:18:45.817Z',
        //     updatedAt: '2021-01-04T00:28:05.279Z'
        //   }

        // const workflow = await Workflow.archiveWorkflow({
        //     workflowId: '5ff25ee52e371f0ac8fe8ce9'
        // })
        // const workflow = {
        //       _id: '5ff25ee52e371f0ac8fe8ce9',
        //       active: false,
        //       name: 'Send client email',
        //       projectId: '5ff248eddf605f047e7158ef',
        //       tasks: [ [Object] ],
        //       payloads: [ [Object] ],
        //       webhooks: [ [Object] ],
        //       lockedResource: false,
        //       preventExecution: false,
        //       createdAt: '2021-01-04T00:18:45.817Z',
        //       updatedAt: '2021-01-04T00:23:53.091Z'
        //     }

        // const workflow = await Workflow.restoreWorkflow({
        //     workflowId: '5ff25ee52e371f0ac8fe8ce9'
        // })
        // const workflow = {
        //       _id: '5ff25ee52e371f0ac8fe8ce9',
        //       active: true,
        //       name: 'Send client email',
        //       projectId: '5ff248eddf605f047e7158ef',
        //       tasks: [ [Object] ],
        //       payloads: [ [Object] ],
        //       webhooks: [ [Object] ],
        //       lockedResource: false,
        //       preventExecution: false,
        //       createdAt: '2021-01-04T00:18:45.817Z',
        //       updatedAt: '2021-01-04T00:23:53.091Z'
        //     }


    } catch(err) {
        console.log('Test error', err.message)
    }
}

init()