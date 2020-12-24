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

### Project

### Request

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