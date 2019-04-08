# git-conn-api
## Git Connector API

A REST API to manage Git Repositories for git-conn-app.
This code exposes a simple CRUD services to manage searched repositories from GitHub.

## Services Available

- get Repositories - <server_url>/api/repositories
Returns a list of repositories.

- get Repository - <server_url>/api/repositories/{id}
Returns a repository by id.

- post Repository - <server_url>/api/repositories/{id}
Creates a new repository.

- delete Repository - <server_url>/api/repositories/{id}
Deletes a repository by id.


API was built with **NodeJs** and **MySQL** Database. Some repositories information will be saved like:

 - Name;
 - Description;
 - Stars;
 - Watchers;
 - Link;
 - Main language.

