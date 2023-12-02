const express = require('express');
const router = express.Router();

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

router.get("/", (req,res) => {
    const details = {name: 'Gerard', favorite: 'Chinese'};
    res.status(200);
    res.render('generic',details);
});

router.get("/first", (req,res) => {
    const details = {name: 'Caoimhe', favorite: 'Pasta'};
    res.status(200);
    res.render('generic', details);
});

router.get("/second", (req,res) => {
    const details = {name: 'james', favorite: 'mexican'};
    res.status(200);
    res.render('generic', details);
});

router.get("*", (req,res) => {
    res.status(404);
    res.send("<h1>Page not found</h1>");
});

app.use('/', router);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});