const express = require('express');
const router = require('./routes/myroutes');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));



app.use('/', router);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});