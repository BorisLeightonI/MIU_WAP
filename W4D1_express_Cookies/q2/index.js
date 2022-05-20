const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

const date = new Date();
let hour = date.getHours(); /* hour = 19;*/
console.log('hour:',hour);

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static('views'));
app.use(express.static('js'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));  
// so that the post parameters are parsed on req.body.
// app.use(express.json());
// Use the session middleware
app.use(session({
    secret: 'a simple word', 
    cookie: {maxAge: 60000 }
}));

app.get('/', (req, res) => {
    res.render('form', {hour});  
});
app.get('/output', (req, res) => {
    let name = req.session.name;//req.query.name;
    let age = req.session.age;//req.query.age;
    if (!name && !age) {
        name = "person";
        age = 0;
    }
    res.send(`Welcome ${name}, from the previous form you are ${age} years old`);
});

// Access the session as req.session
app.post('/output', (req, res, next)=>{
    console.log('post received:',req.body);
    let name = req.body.name;
    let age = req.body.age;
    req.session.name = name;
    req.session.age = age;
    res.status(200);
    res.end();
    // res.redirect(`/output?name=${name}&age=${age}`);
});


app.listen(3001, console.log('Server running on port 3001'));
