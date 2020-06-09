const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// database  connetion
require('./mongo')


app.use(bodyParser.urlencoded({ extended: true }));
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


