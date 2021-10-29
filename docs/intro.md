---
sidebar_position: 1
---

# Getting started

Let's discover **Flugzeug in less than 5 minutes**.

## Installation

First, install [Yeoman]("https://yeoman.io/") and generator-flugzeug using [npm]("https://www.npmjs.com/") (we assume you have pre-installed [node.js]("https://nodejs.org/en/")).

```shell
npm install -g yo generator-flugzeug
```

Then generate your new project:

```shell
flug app my-project
```

**Please note:** If you are using MySQL, don't forget to manually create the database with the name you specified when creating your project. Also please update your database access credentials on the .env file in the root of the project if needed.

## Available generators

Run any inside your project folder:

```shell
flug api
flug model
flug controller
flug service
```

### Development

For testing the generator during development, use:

```shell
npm link
```
