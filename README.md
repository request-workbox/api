# request-workbox

[![npm version](https://img.shields.io/npm/v/request-workbox.svg?style=flat-square)](https://www.npmjs.org/package/request-workbox)

Manage, test and connect public and private endpoints. Run APIs without code. [Learn more](https://requestworkbox.com)
## Table of Contents

  - [Features](#features)
  - [Installing](#installing)
  - [Details](#details)
  - [Pricing](#pricing)
  - [Support](#support)
  - [API](#api)
    - [Getting started](#getting-started)
    - [Request sandbox](#request-sandbox)
    - [Workflow sandbox](#workflow-sandbox)
    - [Project](#project)
    - [Request](#request)
    - [Workflow](#workflow)
    - [Storage](#storage)
    - [Queue](#queue)
    - [Instance](#instance)
  - [Schema](#schema)
    - [Project](#project-schema)
    - [Request](#request-schema)
    - [Workflow](#workflow-schema)
    - [Storage](#storage-schema)
    - [Queue](#queue-schema)
    - [Instance](#instance-schema)
    - [Queue Stat](#queue-stat-schema)
    - [Instance Stat](#instance-stat-schema)
    - [Usage](#usage-schema)
  - [Considerations](#considerations)

## Features

- Store API requests, including the url, headers, query, and body values.
- Store credentials and payloads in storage for templating during workflow runtime.
- Supports queueing, scheduling, and returning results immediately.
- Configure custom API workflows to pass information between requests.
- Trigger workflows from the [Dashboard](https://dashboard.requestworkbox.com), REST API and NPM Library.
- Accept incoming workflow payloads.
- Send a webhook after workflow completion.
- View upcoming workflow schedule and past workflow instances.
- Cancel upcoming and scheduled workflows before they run.
- Return workflow results in JSON or set-and-forget requests (with webhooks).
- Generate API tokens to access workflows and services from any application.
- Invite users to collaborate on projects.
- Define team member permissions.
- Lock shared API resources.
- Redact sensitive request data.
- Works seamlessly with Postman.

## Installing

Using npm:

```bash
$ npm install request-workbox
```

## Details

Request Workbox was created to provide tooling for REST APIs, such as managing parameters, permission based responses, team access, and options for running and monitoring multiple requests and workflows concurrently (with queuing and scheduling).

You can chain requests into workflows, and configure the options for each request using storage data, incoming payloads or response data from an any other request in the workflow. The system is optimized for text and JSON data, which allows users with any backend configuration (or Postman) to integrate seamlessly. 

Trigger workflows and receive results immediately, or send the results to a different endpoint on completion or error. All features are available from the browser [dashboard](https://dashboard.requestworkbox.com), REST API and NPM Library.

## Pricing

There are no monthly subscriptions. No monthly fees. Creating an account is free and payments are pay as you go. Every project includes 5 requests per minute and 1GB of data transfer free.

| Type                 | Description      | Price  | Per     |
|----------------------|------------------|--------|---------|
| Free project         | 5 requests/min   | Free   | project |
| Standard upgrade     | 15 requests/min  | $10    | project |
| Developer upgrade    | 50 requests/min  | $25    | project |
| Professional upgrade | 250 requests/min | $50    | project |
| Data transfer        | 1 GB             | $3     | project |

> Product Hunt promo: free standard upgrade. Use promo code PRODUCTHUNT.

## Support

If you work with APIs, or are a UI/UX nerd, or have any similar interest in the product, I would love to get your feedback. Reach out to support and I’ll send you a data transfer credit to get you started.

Let me know if you have any questions or issues, I’d be delighted to help. I take your privacy seriously, and can export or delete all of your data at any point in time. You can reach me at support@requestworkbox.com. Sign up today.

## API

Accepts an API Key and project id. Subsequent requests are tied to the same project. Responses are permission based. **Do not share your API keys with team members or anyone else.** Members can access your project (after accepting your invitation) with their own API keys. You can invite a user to your project within the [dashboard](https://dashboard.requestworkbox.com).

```
const requestWorkbox = require('request-workbox')

const RequestWorkbox = requestWorkbox({
    apiKey: '4DDFE1ADF0064EA88B4D7111D8E2FC55',
    projectId: '5fc455ce1924bd02bf49d28f',
})
```

#### Getting started

You can access a sandbox project before signing up for an account using these credentials (contains team-read permission).

```
// apiKey: 4DDFE1ADF0064EA88B4D7111D8E2FC55
// projectId: 5fc455ce1924bd02bf49d28f
```

#### Request Sandbox

Returns results immediately (after initialization).

```
// POST https://api.requestworkbox.com/return-request/5fc726bd1684be02dc49e48d

const requestResults = await RequestWorkbox.Request.startRequest({
    requestId: '5fc726bd1684be02dc49e48d',
    workflowType: 'return',
})
```

Returns queue id and instance id immediately (after initialization). Webhooks currently unsupported for queue requests and schedule requests.

```
// POST https://api.requestworkbox.com/queue-request/5fc726bd1684be02dc49e48d
// POST https://api.requestworkbox.com/schedule-request/5fc726bd1684be02dc49e48d

const { queueId, instanceId } = await RequestWorkbox.Request.startRequest({
    requestId: '5fc726bd1684be02dc49e48d',
    workflowType: 'queue', // queue, schedule
})
```

#### Workflow Sandbox

Returns results immediately (after initialization).

```
// POST https://api.requestworkbox.com/return-workflow/5fc726bd9834be02d99ee48d

const workflowResults = await RequestWorkbox.Workflow.startWorkflow({
    workflowId: '5fc726bd9834be02d99ee48d',
    workflowType: 'return',
})
```

Returns queue id and instance id immediately (after initialization). Results are sent to the first request listed in `Workflow.webhooks` on completion or error. Request errors break the workflow chain and exit immediately to send the results of the successfully sent requests to the webhook.

```
// POST https://api.requestworkbox.com/queue-workflow/5fc726bd9834be02d99ee48d
// POST https://api.requestworkbox.com/schedule-workflow/5fc726bd9834be02d99ee48d

const { queueId, instanceId } = await RequestWorkbox.Workflow.startWorkflow({
    workflowId: '5fc726bd9834be02d99ee48d',
    workflowType: 'queue', // queue, schedule
})
```

### Project

### Create project

Creates and returns a new project.

```
// POST https://api.requestworkbox.com/create-project

const project = await RequestWorkbox.Project.createProject()
```

### List projects

List projects you own, are a member of, or have been invited to.

```
// POST https://api.requestworkbox.com/list-projects

const projects = await RequestWorkbox.Project.listProjects()
```

### Get project

Returns an existing project. Requires read permission.

```
// POST https://api.requestworkbox.com/get-project

const project = await RequestWorkbox.Project.getProject({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### Update project

Update project name and permissions. Owner only access. Returns updated project.

```
// POST https://api.requestworkbox.com/update-project

const project = await RequestWorkbox.Project.updateProject({
  _id: '5fc455ce1924bd02bf49d28f',
  name: 'Email Endpoints',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Project id. 
| name | Optional | Project name.
| returnRequest | Optional | Return request permission.
| queueRequest | Optional | Queue request permission.
| scheduleRequest | Optional | Schedule request permission.
| returnWorkflow | Optional | Return workflow permisssion.
| queueWorkflow | Optional | Queue workflow permission.
| scheduleWorkflow | Optional | Schedule workflow permission.

### Archive project

Archives a project. Owner only access. Returns updated project.

```
// POST https://api.requestworkbox.com/archive-project

const project = await RequestWorkbox.Project.archiveProject({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### Restore project

Restores a project. Owner only access. Returns updated project.

```
// POST https://api.requestworkbox.com/restore-project

const project = await RequestWorkbox.Project.restoreProject({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### Request

### Create request

Creates and returns a new request. Requires write permission.

```
// POST https://api.requestworkbox.com/create-request

const request = await RequestWorkbox.Request.createRequest({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### List requests

List requests for a given project. Requires read permission.

```
// POST https://api.requestworkbox.com/list-request

const requests = await RequestWorkbox.Request.listRequests({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### Get request

Returns an existing request. Requires read permission.

```
// POST https://api.requestworkbox.com/get-request

const request = await RequestWorkbox.Request.getRequest({
  requestId: '5fc726bd1684be02dc49e48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| requestId | Yes | Request id.
| projectId | Optional | Project id.

### Save request changes

Saves request changes. Requires write permission. Returns updated request.

```
// POST https://api.requestworkbox.com/save-request-changes

const request = await RequestWorkbox.Request.saveRequestChanges({
  _id: '5fc726bd1684be02dc49e48d',
  name: 'Send customer email',
  url: 'https://domain.com/send-customer-email',
  method: 'POST',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Request id.
| name | Optional | Request name.
| url | Optional | HTTPS URL.
| method | Optional | HTTP request method.
| authorizationType | Optional | Authorization type.
| authorization | Optional | Request authorization.
| query | Optional | Request query.
| headers | Optional | Request headers.
| query | Optional | Request query.
| body | Optional | Request body.
| lockedResource | Optional | Locked resource option.
| preventExecution | Optional | Prevent execution option.
| sensitiveResponse | Optional | Senstive response option.

### Add request detail item

Pushes an option to the request header, query, or body. Requires write permission. Returns updated request.

```
// POST https://api.requestworkbox.com/add-request-detail-item

const request = await RequestWorkbox.Request.addRequestDetailItem({
  _id: '5fc726bd1684be02dc49e48d',
  requestDetailOption: 'headers'
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Request id.
| requestDetailOption | Yes | Request detail option.

### Delete request detail item

Removes an option from the request header, query, or body. Requires write permission. Returns updated request.

```
// POST https://api.requestworkbox.com/delete-request-detail-item

const request = await RequestWorkbox.Request.deleteRequestDetailItem({
  _id: '5fc726bd1684be02dc49e48d',
  requestDetailOption: 'query'
  requestDetailItemId: '5fc726iu36849db2dc4ed38d'
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Request id.
| requestDetailOption | Yes | Request detail option.
| requestDetailItemId | Yes | Existing request detail item id.

### Archive request

Archive request. Owner only access. Returns updated request.

```
// POST https://api.requestworkbox.com/archive-request

const request = await RequestWorkbox.Request.archiveRequest({
  requestId: '5fc726bd1684be02dc49e48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| requestId | Yes | Request id.

### Restore request

Restore request. Owner only access. Returns updated request.

```
// POST https://api.requestworkbox.com/restore-request

const request = await RequestWorkbox.Request.restoreRequest({
  requestId: '5fc726bd1684be02dc49e48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| requestId | Yes | Request id.

### Workflow

### Create workflow

Creates and returns a new workflow. Requires write permission.

```
// POST https://api.requestworkbox.com/create-workflow

const workflow = await RequestWorkbox.Workflow.createWorkflow({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### List workflows

List workflows for a given project. Requires read permission.

```
// POST https://api.requestworkbox.com/list-workflows

const workflows = await RequestWorkbox.Workflow.listWorkflows({
  projectId: '5fc455ce1924bd02bf49d28f', // defaults to initialized value
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### Get workflow

Returns an existing workflow. Requires read permission.

```
// POST https://api.requestworkbox.com/get-workflow

const workflow = await RequestWorkbox.Workflow.getWorkflow({
  workflowId: '5fc726bd9834be02d99ee48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| workflowId | Yes | Workflow id.
| projectId | Optional | Project id.

### Save workflow changes

Saves workflow changes. Requires write permission. Returns updated workflow.

```
// POST https://api.requestworkbox.com/save-workflow-changes

const workflow = await RequestWorkbox.Workflow.saveWorkflowChanges({
  _id: '5fc726bd9834be02d99ee48d', // workflowId
  name: 'Daily email workflow',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Workflow id.
| name | Optional | Workflow task array.
| payloads | Optional | Workflow task array.
| tasks | Optional | Workflow task array.
| webhooks | Optional | Workflow task array.
| lockedResource | Optional | Prevent changes.
| preventExecution | Optional | Prevent execution.

### Add workflow task

Adds a task to the workflow chain at `Workflow.tasks`. Requires write permission. Returns updated workflow.

```
// POST https://api.requestworkbox.com/add-workflow-task

const workflow = await RequestWorkbox.Workflow.addWorkflowTask({
  _id: '5fc726bd9834be02d99ee48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Workflow id.

### Delete workflow task

Delete request (task) from the workflow chain. Requires write permission. Returns updated workflow.

```
// POST https://api.requestworkbox.com/delete-workflow-task

const workflow = await RequestWorkbox.Workflow.deleteWorkflowTask({
  _id: '5fc726bd9834be02d99ee48d',
  taskId: '5fc726bd4534eb02d99ff48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Workflow id.
| taskId | Yes | Workflow task id.

### Archive workflow

Archive workflow. Owner only access. Returns updated workflow.

```
// POST https://api.requestworkbox.com/archive-workflow

const workflow = await RequestWorkbox.Workflow.archiveWorkflow({
  workflowId: '5fc726bd9834be02d99ee48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| workflowId | Yes | Workflow id.

### Restore workflow

Restore workflow. Owner only access. Returns updated workflow.

```
// POST https://api.requestworkbox.com/restore-workflow

const workflow = await RequestWorkbox.Workflow.restoreWorkflow({
  workflowId: '5fc726bd9834be02d99ee48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| workflowId | Yes | Workflow id.

### Storage

### Create storage

Creates and returns a new storage. Requires write permission.

```
// POST https://api.requestworkbox.com/create-storage

const storage = await RequestWorkbox.Storage.createStorage({
  projectId: '5fc455ce1924bd02bf49d28f',
  storageType: 'text',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.
| storageType | Yes | Storage type.

### List storages

List storages for a given project. Requires read permission.

```
// POST https://api.requestworkbox.com/list-storages

const storages = await RequestWorkbox.Storage.listStorages({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Workflow id.

### Get storage

Returns an existing storage. Requires read permission.

```
// POST https://api.requestworkbox.com/get-storage

const storage = await RequestWorkbox.Storage.getStorage({
  storageId: '5fc726bd873fe02d99dd18f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| storageId | Yes | Storage id.
| projectId | Optional | Project id.

### Save storage changes

Saves storage changes. Requires write permission. Returns updated storage.

```
// POST https://api.requestworkbox.com/save-storage-changes

const storage = await RequestWorkbox.Storage.saveStorageChanges({
  _id: '5fc726bd873fe02d99dd18f',
  name: 'Mailchimp API Key',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| _id | Yes | Storage id.
| name | Optional | Storage name.
| lockedResource | Optional | Prevent changes.
| preventExecution | Optional | Prevent execution.
| sensitiveResponse | Optional | Redacts public response.

### Archive storage

Archive storage. Owner only access. Returns updated storage.

```
// POST https://api.requestworkbox.com/archive-storage

const storage = await RequestWorkbox.Storage.archiveStorage({
  storageId: '5fc726bd873fe02d99dd18f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| storageId | Yes | Storage id.

### Restore storage

Restore storage. Owner only access. Returns updated storage.

```
// POST https://api.requestworkbox.com/restore-storage

const storage = await RequestWorkbox.Storage.restoreStorage({
  storageId: '5fc726bd873fe02d99dd18f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| storageId | Yes | Storage id.

### Get text storage data

Retreive text storage value. Requires read permissions, or write permissions if data returns sensitive response. Returns storage and storage value.

```
// POST https://api.requestworkbox.com/get-text-storage-data

const storage = await RequestWorkbox.Storage.getTextStorageData({
  storageId: '5fc726bd873fe02d99dd18f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| storageId | Yes | Storage id.
| projectId | Optional | Project id.

### Get file storage data

Retreive file storage value. Requires read permissions, or write permissions if data returns sensitive response. Returns file.

```
// POST https://api.requestworkbox.com/get-file-storage-data

const storage = await RequestWorkbox.Storage.getFileStorageData({
  storageId: '5fc726bd873fe02d99dd18f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| storageId | Yes | Storage id.
| projectId | Optional | Project id.

### Get file storage usage

Get file storage usage. Requires write permissions. Returns storage and usage.

```
// POST https://api.requestworkbox.com/get-storage-usage

const storage = await RequestWorkbox.Storage.getStorageUsage({
  storageId: '5fc726bd873fe02d99dd18f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| storageId | Yes | Storage id.
| projectId | Optional | Project id.

### Update text storage data

Update text storage value. Requires write permission. Returns updated storage and value.

```
// POST https://api.requestworkbox.com/update-text-storage-data

const storage = await RequestWorkbox.Storage.updateTextStorageData({
  storageId: '5fc726bd873fe02d99dd18f',
  storageValue: 'AEF032-AF7631-S520495E',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| storageId | Yes | Storage id.
| projectId | Optional | Project id.
| storageValue | Optional | Storage value. 1MB max.

### Queue

### List queues

List queues for a given workflow from start to end of day (in UTC). Requires read permission.

```
// POST https://api.requestworkbox.com/list-queues

const queues = await RequestWorkbox.Queue.listQueues({
  workflowId: '5fc726bd9834be02d99ee48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| workflowId | Yes | Workflow id.
| projectId | Optional | Project id.
| date | Optional | ISO 8601 date.

### Archive queue

Archive queue. Owner only access. Returns updated queue.

```
// POST https://api.requestworkbox.com/archive-queue

const queue = await RequestWorkbox.Queue.archiveQueue({
  queueId: '5fc72e6d3884be02e11fd48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| queueId | Yes | Queue id.

### Archive all queues

Archive all queues for a given workflow and queue type. Only includes queues from start to end of day (in UTC). Owner only access. Returns updated queues.

```
// POST https://api.requestworkbox.com/archive-all-queues

const queues = await RequestWorkbox.Queue.archiveAllQueues({
  workflowId: '5fc726bd9834be02d99ee48d',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| workflowId | Yes | Workflow id.
| date | Optional | ISO 8601 date.
| queueType | Optional | Queue type.

### Instance

### List instances

List instances for a given project. Requires read permission.

```
// POST https://api.requestworkbox.com/list-instances

const instances = await RequestWorkbox.Instance.listInstances({
  projectId: '5fc455ce1924bd02bf49d28f',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| projectId | Yes | Project id.

### Get instance

Returns an existing instance. Requires read permission.

```
// POST https://api.requestworkbox.com/get-instance

const instance = await RequestWorkbox.Instance.getInstance({
  instanceId: '5fc146db473fee8d98bd1de',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| instanceId | Yes | Instance id.
| projectId | Optional | Project id.

### Get instance usage

Returns instance usage. Requires write permission. Returns instance with usage.

```
// POST https://api.requestworkbox.com/get-instance-detail

const instanceDetail = await RequestWorkbox.Instance.getInstanceDetail({
  instanceId: '5fc146db473fee8d98bd1de',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| instanceId | Yes | Instance id.
| projectId | Optional | Project id.

### Download instance stat

Returns entire instance stat (including response data). Requires read permission, or write permission if the stat returns a sensitive response.

```
// POST https://api.requestworkbox.com/download-instance-stat

const instanceStat = await RequestWorkbox.Instance.downloadInstanceStat({
  instanceId: '5fc146db473fee8d98bd1de',
  statId: '5fe146eeb73fee928ded3ee',
})
```

| Option    | Required | Description |
|-----------|----------|-------------|
| instanceId | Yes | Instance id.
| statId | Yes | Stat id.
| projectId | Optional | Project id.

## Schema

### Project schema

```
{
  _id, // projectId
  active: true,
  name: 'Untitled Project', // String
  projectType: 'free', // free, standard, developer, professional
  globalWorkflowStatus: 'running', // running, stopped, locked
  returnRequest: 'owner', // owner, team, public
  returnWorkflow: 'owner', // owner, team, public
  queueRequest: 'owner', // owner, team, public
  queueWorkflow: 'owner', // owner, team, public
  scheduleRequest: 'owner', // owner, team, public
  scheduleWorkflow: 'owner', // owner, team, public
  workflowCount: 0,
  workflowLast: new Date(),
  usage: 0,
  usageRemaining: 1000,
  usageTotal: 1000, // MB
}
```

### Request schema

```
{
  _id, // requestId
  active: true,
  name: 'Sample Request', // String
  projectId: '5fc455ce1924bd02bf49d28f',
  method: 'GET', // GET, POST
  url: 'https://api.requestworkbox.com', // String
  authorizationType: 'noAuth', // noAuth, basicAuth
  authorization: [], // Request detail item schema
  headers: [], // Request detail item schema
  query: [], // Request detail item schema
  body: [], // Request detail item schema
  lockedResource: false, // Boolean
  preventExecution: false, // Boolean
  sensitiveResponse: false, // Boolean
}
```

### Request detail option fields

```
// headers, query, body
```

### Request detail item schema

```
{
  _id, // requestDetailItemId
  active: true, // Boolean
  key: '', // String
  value: '', // String - text value, storageId, runtimeResultName, incoming payload field
  valueType: 'textInput', // textInput, storage, runtimeResult, incomingPayload
}
```

### Workflow schema

```
{
  _id, // workflowId
  active: true,
  name: 'Untitled Workflow', // String
  projectId: '5fc455ce1924bd02bf49d28f',
  workflowType: 'workflow', // request, workflow
  payloads: [], // Workflow task schema
  tasks: [], // Workflow task schema
  webhooks: [], // Workflow task schema
  lockedResource: false, // Boolean
  preventExecution: false, // Boolean
}
```

### Workflow task fields

```
// payloads, tasks, webhooks
```

### Workflow task schema

```
{
  _id, // taskId 
  active: true, // Boolean
  requestId: '5fc726bd1684be02dc49e48d', - webhooks only
  runtimeResultName: '', // String - tasks only
}
```

### Storage schema
```
{
  _id, // storageId
  active: true,
  name: 'Untitled Storage', // String
  projectId: '5fc455ce1924bd02bf49d28f',
  storageType: 'text', // text, file
  storageValue: {}, // text or JSON data
  mimetype: '',
  originalname: '',
  size: 0,
  totalBytesDown: 0,
  totalBytesUp: 0,
  totalMs: 0,
  lockedResource: false, // Boolean
  preventExecution: false, // Boolean
  sensitiveResponse: false, // Boolean
  usage: [], // Usage schema
}
```

### Queue schema

```
{
  _id, // queueId
  active: true,
  projectId: '5fc455ce1924bd02bf49d28f',
  instanceId: '5fc146db473fee8d98bd1de',
  workflowId: '5fc726bd9834be02d99ee48d',
  workflowName: 'Daily email workflow'
  workflowType: 'workflow',
  status: 'received', // pending, queued, uploading, starting, initializing, loading, running, webhook, complete, error, archived
  queueType: 'return', // return, queue, schedule
  date: new Date(), // workflow start time
  storageInstanceId: '', //
  ipAddress: '',
  publicUser: true,
  stats: [], // Queue Stat schema
}
```

### Instance schema

```
{
  _id, // instanceId
  active: true,
  projectId: '5fc455ce1924bd02bf49d28f',
  queueId: '5fc72e6d3884be02e11fd48d',
  queueType: 'return', // return, queue, schedule
  workflowId: '5fc726bd9834be02d99ee48d',
  workflowName: 'Daily email workflow'
  workflowType: 'workflow',
  totalBytesDown: 0,
  totalBytesUp: 0,
  totalMs: 0,
  ipAddress: '',
  publicUser: true,
  stats: [], // Instance Stat schema
  usage: [], // Usage Stat schema
}
```

### Queue Stat schema

```
{
  _id, // queueStatId
  active: true,
  queueId: '5fc72e6d3884be02e11fd48d',
  instanceId: '5fc146db473fee8d98bd1de',
  status: 'received', // pending, queued, uploading, starting, initializing, loading, running, webhook, complete, error, archived
  statusText: '',
  error: false,
}
```

#### Queue stat storage instance id

> The storage instance id will be an empty string or will contain the id of a storage reference when a custom payload is passed to a workflow.

### Instance Stat schema

```
{
    _id, // statId
    active: true,
    instanceId: '5fc146db473fee8d98bd1de',
    taskId: '5fc726bd4534eb02d99ff48d',
    taskField: 'tasks', // tasks, payload, webhooks
    requestName: 'Send customer email',
    status: 200,
    statusText: '',
    requestType: 'request', // request, webhook
    requestId: '5fc726bd1684be02dc49e48d',
    requestPayload: {},
    responsePayload: {},
    startTime: new Date(),
    endTime: new Date(),
    duration: 0,
    requestSize: 0,
    responseSize: 0,
    responseType: '',
    error: false,
    sensitiveResponse: false,
}
```

### Usage schema

```
{
  _id, // usageId
  active: true,
  usageId: '5fc726bd873fe02d99dd18f', // resource id
  usageDetail: '', // usage description
  usageType: 'request', // request, webhook, storage, stat
  usageDirection: 'up', // up, down, time
  usageAmount: 0,
  usageLocation: 'api', // api, instance, queue
  usageMeasurement: 'byte', // byte, ms
}
```

#### API resource owner only access fields

```
// lockedResource, preventExecution, sensitiveResponse
```

### Considerations

#### Project

  - This project is maintained by Zach Coss and hosted on AWS (part of the AWS Activate Founders program).
  - If you like this project, have any suggestions, would like to partner, or need to report a security issue, please reach out to zach@requestworkbox.com. You can also use the Feedback button located within the [dashboard](https://dashboard.requestworkbox.com).

#### API

  - Backup and versioning (in development).
  - Delete (in development). I take your privacy seriously, and can export or delete all of your data at any point in time. Reach out to support@requestworkbox.com.