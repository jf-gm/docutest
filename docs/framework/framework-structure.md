---
sidebar_position: 1
---

# Framework

This app uses the following technologies:

- [Typescript](https://www.typescriptlang.org/docs/tutorial.html)
- [Express](http://expressjs.com/en/4x/api.html)
- [Sequelize](http://docs.sequelizejs.com/en/latest/api/sequelize/)

It is recommended to have basic knowledge of those technologies before working with this project.

# Project structure

- **app:** Project code
- **dist:** Compiled code for production
- **docs:** This documentation
- **public:** Public files to be served by this app
- **gulpfile.js:** Compilation and project management scripts
- **tsconfig.json:** Typescript compiler configuration
- **package.json:** npm project configuration


## App structure

- **config:** Global configuration for the app
- **controllers:** HTTP API controllers
- **validators:** Validators for controllers
- **models:** DB models
- **policies:** Access control and permission functions to be used in controllers
- **services:** Services that run independently to the API or can be used by it
- **libraries:** Base libraries for the project
- **migrations:** Database migration files
- **db.ts:** Database initialization
- **server.ts:** Server initialization
- **routes.ts:** Routes definition. This file automatically loads the routes from the API in `controllers` and serves public files from `../public`
- **main.ts:** Application starting point, useful for initializing the services, specially for those that require to be started with a certain order
- **declarations.d.ts:** Special Typescript declarations for the project
- **seedData.ts:** DB initial data population script

# Project commands

- **npm run makeDocumentation:** Create YAML documentation
- **npm run makeValidators:** Create validator files
- **npm run makeDBDiagram:** Create ERD diagram in documentation folder



