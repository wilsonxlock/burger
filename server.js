const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const port = 8080;
const app = express();
const mysql = require("mysql");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});
app.post("/", function (req, res) {

    connection.query("INSERT INTO burgers (burger_type) VALUES (?)", [req.body.burgers], function (err, result) {
        if (err) throw err;

        res.redirect("/");
    });
});

app.listen(port);