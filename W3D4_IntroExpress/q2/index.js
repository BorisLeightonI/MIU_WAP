const express = require('express');
const app = express();


app.use(express.urlencoded()); /* so that
the post parameters are parsed on req.body. */

app.get('/', (req, res) => {

    res.send(`<form action="/result" method='POST'>
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
    <label for="age">Age</label>
    <input type="number" name="age" id="age">
    <input type="submit" value="submit">
    </form>`);
});

app.use('/result', (req, res, next)=>{
    console.log(req.body);

    res.redirect('/');
});

app.listen(3000);
