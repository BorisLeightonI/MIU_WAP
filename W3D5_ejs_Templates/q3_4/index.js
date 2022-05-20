const express = require('express');                                   
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
console.log(path.join(__dirname));
app.use('/css',express.static('css'))
app.use(express.urlencoded());
let addCart = [];
let products = [
  {  name:'Technology',
      img: 'https://placeimg.com/200/200/tech',
      price: 500,
      description: 'default',
      id: 1,
  },
  {  name:'Animals',
      img: 'https://placeimg.com/200/200/animals',
      price: 500,
      description: 'default',
      id: 2,
  },
  {  name:'Architecture',
      img: 'https://placeimg.com/200/200/arch',
      price: 500,
      description: 'default',
      id: 3,
  },
  {  name:'People',
      img: 'https://placeimg.com/200/200/people',
      price: 500,
      description: 'default',
      id: 4,
  },
  {  name:'Nature',
      img: 'https://placeimg.com/200/200/nature',
      price: 500,
      description: 'default',
      id: 5,
  }
 ];

app.get('/', (req, res) => {
  res.render("index", {products, addCart});
});
app.post('/addToCart', (req, res)=>{
  addCart.push(req.body)
  console.log(addCart);
  res.redirect('/');
});
app.listen(3000);