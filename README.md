# git-conn-api
## Git Connector API

[![Build Status](https://semaphoreci.com/api/v1/adilcjr/git-conn-api/branches/master/badge.svg)](https://semaphoreci.com/adilcjr/git-conn-api)

A REST API to manage Git repositories for [git-conn-app](https://github.com/adilcjr/git-conn-app).
This application exposes a simple CRUD services to manage searched repositories from GitHub.
The application is ready for Heroku deployment.

API was built with **NodeJs** and **MySQL** Database. Some repositories information will be saved like:

 - Name;
 - Description;
 - Stars;
 - Watchers;
 - Link;
 - Main language.

## Database Configuration

The database configuration is in db_properties.js. This file is using environment variables.

For study purpose you could change these for a local database parameters.

## Requirements

 - Node.js v.8.12.0
 - Npm v.6.4.1

## Usage

 - Use ``npm i`` to install and download dependencies.
 - Use ``node server.js`` to run application.

## Services Available

- GET Repositories - <server_url>/api/repositories
Returns a list of repositories.

- GET Repository - <server_url>/api/repositories/{id}
Returns a repository by id.

- POST Repository - <server_url>/api/repositories/{id}
Creates a new repository.

- DELETE Repository - <server_url>/api/repositories/{id}
Deletes a repository by id.

## License

git-conn-api is released under [MIT License](https://opensource.org/licenses/MIT).