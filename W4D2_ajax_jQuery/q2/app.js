const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = {};
const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];


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
    // res.send({title: answers[Math.round(Math.randon()*20)]});
    res.json({title: answers[Math.round(Math.random()*20)]});
});

app.listen(3000);