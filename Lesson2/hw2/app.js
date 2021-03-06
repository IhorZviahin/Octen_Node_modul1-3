const express = require('express');
const {engine} = require('express-handlebars');
const path = require("path");
const {static} = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


const users = [
    {firstName: 'Ihor', lastName: 'Zviahin', email: 'Ihorzv@gmail.com', age: 21, city: "Kiev"},
    {firstName: 'Anna', lastName: 'Borukha', email: 'Anna@gmail.com', age: 21, city: "Kiev"}
]

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/errorpage', (req, res) => {
    res.render('errorpage')
})

app.post('/login', (req, res) => {
    const userEmail = users.find(user => user.email === req.body.email)
    if (userEmail) {
        return res.redirect('/errorpage')
    }
    users.push(req.body)
    res.redirect('/users')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.json(users[id])
})

app.use((req,res)=>{
    res.render('NotFoundPage')
})

app.listen(4890, () => {
    console.log("Hi")
})