const express = require('express');

var app = express();

app.get("/", (req,res) => {
    res.status(200);
    res.sendFile(__dirname + "/html/first.html");
});

app.get("/first", (req,res) => {
    res.status(200);
    res.sendFile(__dirname + "/html/first.html");
});

app.get("/second", (req,res) => {
    res.status(200);
    res.sendFile(__dirname + "/html/second.html");
});

app.get("*", (req,res) => {
    res.status(404);
    res.send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});