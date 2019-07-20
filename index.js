// Importing Express Framework
var  express  = require("express");

var bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Intializing the app
var app = express();

// Import Route Module
var apiRoutes = require('./api-routes');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Setup server port
var port = process.env.PORT || 3000;
app.use('/api', apiRoutes);
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
// Sending message to the default Route
app.get('/', function (req, res) {
    res.json({
        status: 'Main page',
        message: 'Welcome to the world of RESTAPI',
        description: 'Goto /api to explore API'
    });
});
// Launch app to listen to the specified PORT
app.listen(3000, () => {
 console.log(`Server running on port ${port}`);
});

