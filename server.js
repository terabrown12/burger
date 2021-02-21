//ports, json and import
var express = require("express");
//set port
var PORT = process.env.PORT || 3000;

//express app 
var app = express();
app.use(express.static("public"));

//json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

//import
var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("server listening on localhost: " + PORT);
});