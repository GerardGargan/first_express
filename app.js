const express = require('express');

var app = express();

app.get("/", (req,res) => {
    res.status(200);
    res.send("<h1>Hello Express World!</h1>")
});

app.get("/first", (req,res) => {
    res.status(200);
    res.send("<h1>First page</h1>");
});

app.get("/second", (req,res) => {
    res.status(200);
    res.send("<h1>Second page</h1>");
});

app.get("*", (req,res) => {
    res.status(404);
    res.send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});