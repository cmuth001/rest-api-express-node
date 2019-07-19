var  Controller = require('./controller/controller.js');
var  express  = require("express");
var app = express();
let mongoose = require('mongoose');
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");
// creating an object
var contObj = new Controller();

app.get("/users", (req, res, next) => {
    var data = contObj.get_users();
    res.send(data);
   });
app.get("/user/:id", (req, res, next) => {
    var id = req.params.id;
    var data = contObj.get_user(id);
    res.send(data);
});
   
app.listen(3000, () => {
 console.log("Server running on port 3000");
});