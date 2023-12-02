const express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get("/", (req,res) => {
    const details = {name: 'Gerard', favorite: 'Chinese'};
    res.status(200);
    res.render('generic',details);
});

app.get("/first", (req,res) => {
    const details = {name: 'Caoimhe', favorite: 'Pasta'};
    res.status(200);
    res.render('generic', details);
});

app.get("/second", (req,res) => {
    const details = {name: 'james', favorite: 'mexican'};
    res.status(200);
    res.render('generic', details);
});

app.get("*", (req,res) => {
    res.status(404);
    res.send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});