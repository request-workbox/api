# request-workbox

[![npm version](https://img.shields.io/npm/v/request-workbox.svg?style=flat-square)](https://www.npmjs.org/package/request-workbox)

Manage, test and connect public and private endpoints. Run APIs without code. [Learn more](https://requestworkbox.com)
## Table of Contents

  - [Features](#features)
  - [Installing](#installing)

## Features

- Store HTTP API requests, including the url, headers, query, and body values.
- Store credentials and payloads in storage for templating during workflow runtime.
- Supports queueing, scheduling, and returning results immediately.
- Configure custom API workflows to pass information between requests.
- Trigger workflows from the [Dashboard](https://dashboard.requestworkbox.com) or REST API.
- Accept incoming workflow payloads.
- Send a webhook after workflow completion.
- View upcoming workflow schedule and past workflow instances.
- Allocate general purpose webhook endpoints to store incoming payloads (beta).
- Generate API tokens to access workflows and services from any application.
- Create status checks for your API requests (beta).
- Invite users to collaborate on projects.
- Define team member permissions.
- Lock shared API resources.
- Redact sensitive request data.
- Workflow batching (in development).

## Installing

Using npm:

```bash
$ npm install request-workbox
```