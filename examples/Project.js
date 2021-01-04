const requestWorkbox = require('../index');
const RequestWorkbox = requestWorkbox({
    apiKey: '',
})

const init = async function() {
    try {

        const { Project } = RequestWorkbox

        // const newProject = await Project.createProject()
        // const newProject = {
        //     _id: '5ff248eddf605f047e7158ef',
        //     active: true,
        //     name: 'Untitled Project',
        //     owner: false,
        //     projectType: 'free',
        //     globalWorkflowStatus: 'running',
        //     workflowCount: 0,
        //     workflowLast: '2021-01-03T22:33:16.860Z',
        //     usage: 0,
        //     usageRemaining: 1000,
        //     usageTotal: 1000,
        //     createdAt: '2021-01-03T22:45:01.895Z',
        //     updatedAt: '2021-01-03T22:45:01.895Z',
        //     returnRequest: 'owner',
        //     returnWorkflow: 'owner',
        //     queueRequest: 'owner',
        //     queueWorkflow: 'owner',
        //     scheduleRequest: 'owner',
        //     scheduleWorkflow: 'owner'
        // }

        // const project = await Project.getProject({
        //     projectId: '5ff248eddf605f047e7158ef'
        // })
        // const project = {
        //     _id: '5ff248eddf605f047e7158ef',
        //     active: true,
        //     name: 'Untitled Project',
        //     owner: true,
        //     projectType: 'free',
        //     globalWorkflowStatus: 'running',
        //     workflowCount: 0,
        //     workflowLast: '2021-01-03T22:33:16.860Z',
        //     usage: 0,
        //     usageRemaining: 1000,
        //     usageTotal: 1000,
        //     createdAt: '2021-01-03T22:45:01.895Z',
        //     updatedAt: '2021-01-03T22:45:01.895Z',
        //     returnRequest: 'owner',
        //     returnWorkflow: 'owner',
        //     queueRequest: 'owner',
        //     queueWorkflow: 'owner',
        //     scheduleRequest: 'owner',
        //     scheduleWorkflow: 'owner'
        //   }

        // const projects = await Project.listProjects()
        // const projects = [
        //     {
        //       _id: '5ff248eddf605f047e7158ef',
        //       active: true,
        //       name: 'Untitled Project',
        //       owner: true,
        //       projectType: 'free',
        //       globalWorkflowStatus: 'running',
        //       workflowCount: 0,
        //       workflowLast: '2021-01-03T22:33:16.860Z',
        //       usage: 0,
        //       usageRemaining: 1000,
        //       usageTotal: 1000,
        //       createdAt: '2021-01-03T22:45:01.895Z',
        //       updatedAt: '2021-01-03T22:45:01.895Z',
        //       returnRequest: 'owner',
        //       returnWorkflow: 'owner',
        //       queueRequest: 'owner',
        //       queueWorkflow: 'owner',
        //       scheduleRequest: 'owner',
        //       scheduleWorkflow: 'owner'
        //     }
        //   ]

        // const project = await Project.updateProject({
        //     _id: '5ff248eddf605f047e7158ef',
        //     name: 'Email APIs'
        // })
        // const project = {
        //     _id: '5ff248eddf605f047e7158ef',
        //     active: true,
        //     name: 'Email APIs',
        //     owner: false,
        //     projectType: 'free',
        //     globalWorkflowStatus: 'running',
        //     workflowCount: 0,
        //     workflowLast: '2021-01-03T22:33:16.860Z',
        //     usage: 0,
        //     usageRemaining: 1000,
        //     usageTotal: 1000,
        //     createdAt: '2021-01-03T22:45:01.895Z',
        //     updatedAt: '2021-01-03T23:03:08.062Z',
        //     returnRequest: 'owner',
        //     returnWorkflow: 'owner',
        //     queueRequest: 'owner',
        //     queueWorkflow: 'owner',
        //     scheduleRequest: 'owner',
        //     scheduleWorkflow: 'owner'
        //   }

        // const project = await Project.archiveProject({
        //     projectId: '5ff248eddf605f047e7158ef'
        // })
        // const project = {
        //     _id: '5ff248eddf605f047e7158ef',
        //     active: false,
        //     name: 'Email APIs',
        //     owner: false,
        //     projectType: 'free',
        //     globalWorkflowStatus: 'running',
        //     workflowCount: 0,
        //     workflowLast: '2021-01-03T22:33:16.860Z',
        //     usage: 0,
        //     usageRemaining: 1000,
        //     usageTotal: 1000,
        //     createdAt: '2021-01-03T22:45:01.895Z',
        //     updatedAt: '2021-01-03T23:04:12.001Z',
        //     returnRequest: 'owner',
        //     returnWorkflow: 'owner',
        //     queueRequest: 'owner',
        //     queueWorkflow: 'owner',
        //     scheduleRequest: 'owner',
        //     scheduleWorkflow: 'owner'
        //   }

        // const project = await Project.restoreProject({
        //     projectId: '5ff248eddf605f047e7158ef'
        // })
        // const project = {
        //     _id: '5ff248eddf605f047e7158ef',
        //     active: true,
        //     name: 'Email APIs',
        //     owner: false,
        //     projectType: 'free',
        //     globalWorkflowStatus: 'running',
        //     workflowCount: 0,
        //     workflowLast: '2021-01-03T22:33:16.860Z',
        //     usage: 0,
        //     usageRemaining: 1000,
        //     usageTotal: 1000,
        //     createdAt: '2021-01-03T22:45:01.895Z',
        //     updatedAt: '2021-01-03T23:05:04.643Z',
        //     returnRequest: 'owner',
        //     returnWorkflow: 'owner',
        //     queueRequest: 'owner',
        //     queueWorkflow: 'owner',
        //     scheduleRequest: 'owner',
        //     scheduleWorkflow: 'owner'
        //   }

    } catch(err) {
        console.log('Test error', err.message)
    }
}

init()