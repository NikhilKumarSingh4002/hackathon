const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
var __dirname=path.resolve();
const bodyParser=require('body-parser');
app.set('view engine', 'ejs');


app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.render('login')
});

app.get('/register',(req,res)=>{
  res.render('register');
});

app.get('/shopping',(req,res)=>{
  res.render('home1');
})

app.get('/home',(req,res)=>{
  res.render('home');
})
app.get('/profile',(req,res)=>{
  res.render('profile');
})
app.get('/premium',(req,res)=>{
  res.render('premium');
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
