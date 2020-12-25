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

## Features

- Store HTTP API requests, including the url, headers, query, and body values.
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

Trigger workflows and receive results immediately, or send the results to a different endpoint on completion or error. All features are available from the browser dashboard, REST API and NPM Library.

## Pricing

There are no monthly subscriptions. No monthly fees. Creating an account is free and payments are pay as you go. Every project includes 5 requests per minute and 1GB of data transfer free.

| Type                 | Description      | Price  | Per     |
|----------------------|------------------|--------|---------|
| Standard upgrade     | 15 requests/min  | $10    | project |
| Developer upgrade    | 50 requests/min  | $25    | project |
| Professional upgrade | 250 requests/min | $50    | project |
| Data transfer        | 1 GB             | $3     | project |

> Product Hunt promo: free product upgrade to standard. Use promo code PRODUCTHUNT.

## Support

If you work with APIs, or are a UI/UX nerd, or have any similar interest in the product, I would love to get your feedback. Reach out to support and I’ll send you a data transfer credit to get you started.

Let me know if you have any questions or issues, I’d be delighted to help. I take your privacy seriously, and can export or delete all of your data at any point in time. You can reach me at support@requestworkbox.com. Sign up today.

## API

Accepts an API Key and project id. Subsequent requests are tied to the same project. Responses are based on the API key. Do not share your API keys with team members. Members can access your project (after accepting your invitation) with their own API tokens.

```
const requestWorkbox = require('request-workbox');

const RequestWorkbox = requestWorkbox({
    apiKey: '4DDFE1ADF0064EA88B4D7111D8E2FC55',
    projectId: '5fc455ce1924bd02bf49d28f',
})
```

### Project

#### Create project

Creates and returns a new project.

```
// HTTP POST https://api.requestworkbox.com/create-project

const project = await RequestWorkbox.createProject({
  projectId: '5fc455ce1924bd02bf49d28f', // defaults to initialized value
})
```

#### List projects

List projects you own, are a member of, or have been invited to.

```
// HTTP POST https://api.requestworkbox.com/list-projects

const projects = await RequestWorkbox.listProjects({
  projectId: '5fc455ce1924bd02bf49d28f', // defaults to initialized value
})
```

#### Get project

Returns an existing project. Requires read permission.

```
// HTTP POST https://api.requestworkbox.com/get-project

const projects = await RequestWorkbox.getProject({
  projectId: '5fc455ce1924bd02bf49d28f', // defaults to initialized value
})
```

#### Update project

Update project name and permissions. Requires write permission. Returns updated project.

```
// HTTP POST https://api.requestworkbox.com/update-project

const projects = await RequestWorkbox.updateProject({
  _id: '5fc455ce1924bd02bf49d28f', // projectId, defaults to initialized value
  name: 'Email Endpoints', // string
  returnRequest: 'owner', // owner, team, public
  returnWorkflow: 'owner', // owner, team, public
  queueRequest: 'owner', // owner, team, public
  queueWorkflow: 'owner', // owner, team, public
  scheduleRequest: 'owner', // owner, team, public
  scheduleWorkflow: 'owner', // owner, team, public
})
```

#### Archive project

Archives a project. Owner only access. Returns updated project.

```
// HTTP POST https://api.requestworkbox.com/archive-project

const projects = await RequestWorkbox.archiveProject({
  projectId: '5fc455ce1924bd02bf49d28f', // defaults to initialized value
})
```

#### Restore project

Restores a project. Owner only access. Returns updated project.

```
// HTTP POST https://api.requestworkbox.com/restore-project

const projects = await RequestWorkbox.restoreProject({
  projectId: '5fc455ce1924bd02bf49d28f', // optional, defaults to initialized value
})
```

### Request

#### Create request

Creates and returns a new request. Requires write permission.

```
// HTTP POST https://api.requestworkbox.com/create-request

const request = await RequestWorkbox.createRequest({
  projectId: '5fc455ce1924bd02bf49d28f', // defaults to initialized value
})
```

#### List requests

List requests for a given project. Requires read permission.

```
// HTTP POST https://api.requestworkbox.com/list-request

const request = await RequestWorkbox.listRequests({
  projectId: '5fc455ce1924bd02bf49d28f', // defaults to initialized value
})
```

#### Get request

Returns an existing request. Requires read permission.

```
// HTTP POST https://api.requestworkbox.com/get-request

const request = await RequestWorkbox.getRequest({
  requestId: '5fc726bd1684be02dc49e48d',
})
```

#### Save request changes

Saves request changes. Requires write permission. Returns updated request.

```
// HTTP POST https://api.requestworkbox.com/save-request-changes

const request = await RequestWorkbox.saveRequestChanges({
  _id: '5fc726bd1684be02dc49e48d', // requestId
  name: 'Send customer email',
  url: 'https://domain.com/send-customer-email',
  method: 'POST',
})
```

#### Add request detail item

Add request detail item. Requires write permission. Returns updated request.

```
// HTTP POST https://api.requestworkbox.com/add-request-detail-item

const request = await RequestWorkbox.addRequestDetailItem({
  _id: '5fc726bd1684be02dc49e48d', // requestId
  requestDetailOption: 'query' // query, headers, body
})
```

#### Delete request detail item

Delete request detail item. Requires write permission. Returns updated request.

```
// HTTP POST https://api.requestworkbox.com/delete-request-detail-item

const request = await RequestWorkbox.deleteRequestDetailItem({
  _id: '5fc726bd1684be02dc49e48d', // requestId
  requestDetailOption: 'query' // query, headers, body
  requestDetailItemId: '5fc726iu36849db2dc4ed38d' // item to remove
})
```

#### Archive request

Archive request. Owner only access. Returns updated request.

```
// HTTP POST https://api.requestworkbox.com/archive-request

const request = await RequestWorkbox.archiveRequest({
  requestId: '5fc726bd1684be02dc49e48d',
})
```

#### Restore request

Restore request. Owner only access. Returns updated request.

```
// HTTP POST https://api.requestworkbox.com/restore-request

const request = await RequestWorkbox.restoreRequest({
  requestId: '5fc726bd1684be02dc49e48d',
})
```

### Workflow

### Storage

### Queue

### Instance

## Schema

### Project schema

### Request schema

### Workflow schema

### Storage schema

### Queue schema

### Instance schema