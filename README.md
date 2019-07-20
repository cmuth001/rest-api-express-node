# A Simple REST API  tutorial

An Application demonstrating simple REST API implementation with NodeJs, Express and MongoDb(Mongoose)

Implemented a simple data model the stores user information with name adn email. 

Implement the following endpoints:
  - GET /api/users list all user
  - POST /api/users create new user
  - GET /api/user/{id} retrieve a single user
  - PUT /api/user/{id} update a single user
  - DELETE /api/user/{id} delete a single user

## Usage
  1. run npm install in your root project folder.
  2. nodemon index.js
  
  
## Outputs
1. **GET /api/users**: List all user

| ![All users](./public/allUsers.png) |
|:---:|

2. **POST /api/users**: Create new user

| ![Insert users](./public/insertUser.png) |
|:---:|

3. **GET /api/user/{id}**: Retrieve a single user

| ![Get user](./public/getUser.png) |
|:---:|

4. **PUT /api/user/{id}**: Update single user

| ![Update user](./public/updateUser.png) |
|:---:|

5. **DELETE /api/user/{id}**: Delete single user

| ![Delete user](./public/deleteUser.png) |
|:---:|
