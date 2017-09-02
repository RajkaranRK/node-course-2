const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
  console.log(`method:${req.method}`)
  next();
});

app.use((req,res,next)=>{
  res.render('maintenance.hbs');
});

// app.get('/', (req,res) => {
//
//   res.send('<h1>Hello Rajkaran</h1>');
//
// });
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'This is home page',
    welcomeMessage:'Welcome to my website',
  })
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page',
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'Unable to handle the request.....'
  });
});
app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
