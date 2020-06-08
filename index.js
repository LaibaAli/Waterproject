var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const exphbs = require('express-handlebars');



// database  connetion
require('./mongo')

require("./model/addcustomers.model");




const path = require("path");
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
require('./routes.js').attachRoutes(app);

app.use(express.static(__dirname + '/assets'));

const port = 3000;
app.listen(port, (err, success) => {
    if (err) {
        console.log('err', err);
    } else {
        console.log(`Server running on port:${port}...`);
    }
});


