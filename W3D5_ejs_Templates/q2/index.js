const express = require('express');                                   
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css',express.static('css'))
app.use(express.urlencoded());

app.get('/', (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
    hour: date.getHours(),
  });
});
app.post('/result', (req, res)=>{
  console.log(req.body);
  res.redirect('/');
});
app.listen(3000);