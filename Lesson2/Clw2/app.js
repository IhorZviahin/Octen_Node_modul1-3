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
    {
        id: 1,
        firstName: 'Ihor',
        lastName: 'Zviahin',
        email: 'Ihorzv@gmail.com',
        age: 21,
        city: "Kiev",
        password: '12345'
    },
    {id: 2, firstName: 'Anna', lastName: 'Borukha', email: 'Anna@gmail.com', age: 21, city: "Kiev", password: '23456'},
    {id: 3, firstName: 'Dima', lastName: 'Kaz', email: 'Dkaz@gmail.com', age: 22, city: "Kiev", password: '34567'}
];

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/errorpage', (req, res) => {
    res.render('errorpage');
});

app.post('/login', (req, res) => {
    const userEmail = users.find(user => user.email === req.body.email);

    if (userEmail) {
        return res.redirect('/errorpage')
    }
    users.push({...req.body, id:users[users.length-1].id+1});
    res.redirect('/users');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {

    const User = users.find(user=>user.id === +req.params.id);
    if(!User){
        res.redirect('/errorpage')
        return
    }
    res.json(User);
});

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', (req, res) => {
    const {password, email} = req.body;
    const userInfo = users.find((user) => user.password === password && user.email === email)

    if (!userInfo) {
        res.redirect('/errorpage');
        return;
    }

    res.redirect(`/users/${userInfo.id}`);
});

app.use((req, res) => {
    res.render('NotFoundPage');
});

app.listen(4890, () => {
    console.log("Hi");
})