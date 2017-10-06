const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
var app = express();
const mysql = require("mysql");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");