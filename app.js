// express
const express =require("express");
const app = express();
const port = process.env.PORT || 7000;

// ejs-mate
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);

//ejs
const path = require('path');

// set search engine

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

//static
// app.use(express,static('public'));
app.use(express.static(path.join(__dirname,'public')));


// route index
app.get('/',(req,res)=>{
    res.render('index')
});

// route to features
app.get('/service',(req,res)=>{
    res.render('service')
});

// route to whywebsite page
app.get('/whywebsite',(req,res)=>{
    res.render('whywebsite')
});
// route to adver page
app.get('/adver',(req,res)=>{
    res.render('adver')
});
// contact
app.get('/contact',(req,res)=>{
    res.render('contact')
});
// terms
app.get('/terms',(req,res)=>{
    res.render('terms')
});

// blog
app.get('/blog',(req,res)=>{
    res.render('blog')
});
// a\bout
app.get('/about',(req,res)=>{
    res.render('about')
});
// Display Product
app.get('/product',(req,res)=>{
    res.render('product')
});
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})