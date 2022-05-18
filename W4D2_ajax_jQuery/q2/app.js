const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = {};

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    console.log(req.body);
    list[req.body.fname + " " + req.body.lname] = { ...req.body };
    res.status(200);
    // res.render('form');
    res.end();
    console.log('end -post:',list);
});

app.get("/list", (req, res) => {
    res.render("list", { list: list });
});

app.get('/8ball', (req, res)=>{
    console.log(req.query, Object.keys(req.query));
    res.render('8ball');
});

app.get('/test', (req, res)=>{
    // res.send({title:'texto prueba'});
    res.json({user: 'toby'});
});

app.listen(3000);