const express = require('express');
const app = express();
const path = require('path');
const date = new Date();
let hour = date.getHours(); /* hour = 19;*/


app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(express.urlencoded()); /* so that
the post parameters are parsed on req.body. */

app.get('/', (req, res) => {
    if(hour >= 6 && hour <= 18){
        res.send(`
        <link rel="stylesheet" href="/css/day.css">
    
        <form action="/output" method='POST'>
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        <label for="age">Age</label>
        <input type="number" name="age" id="age">
        <input type="submit" value="submit">
        </form>`);
    }
    res.send(`
    <link rel="stylesheet" href="/css/night.css">

    <form action="/output" method='POST'>
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
    <label for="age">Age</label>
    <input type="number" name="age" id="age">
    <input type="submit" value="submit">
    </form>`);

  
});
app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name && !age) {
        name = "person";
        age = 0;
    }

    res.send(`Welcome ${name}, from the previous form you are ${age} years old`);
});

app.use('/output', (req, res, next)=>{
    console.log(req.body);
    let name = req.query.name;
    let age = req.query.age;
    if (!name && !age) {
        name = "person";
        age = 0;
    }
    res.redirect(`/output?name=${name}&age=${age}`);
});


app.listen(3000);
