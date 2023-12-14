const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.set('view engine','ejs');
app.set('views','views');
const users = [];

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res, next)=>{
    res.render('index', {pageTitle: 'Add User'});
})

app.get('/users', (req,res, next)=>{
    res.render('users',{pageTitle:'Users', users: users });
})

app.get('/clear-users', (req, res, next)=>{
    users.splice(0,users.length);
    res.redirect('/users')
})

app.post('/add-user',(req,res, next)=>{
    users.push({name: req.body.username})
    res.redirect('/users')
})
app.listen(3008, ()=>{
    console.log('server started at 3008');
});