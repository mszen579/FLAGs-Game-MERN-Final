//Controller/server.js
//Get models
var User = require('../models/User');


//npm
const {check, validationResult} = require('express-validator/check');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

//mongoDB
mongoose.connect('mongodb://localhost/flaggame');
//express
var app = express();

//middelware
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true // enable set cookie
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: 'supersecretstring12345!',
  saveUninitialized: true,
  resave: true,
  cookie: { maxAge: (60000*30) },
}))

/////////////////////////////////USER controller///////////////////////////

// Registeration
var register = (req, res) => {
    const user = new User(req.body);
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.send({status:'error', errors:errors.mapped() })
    }
    user.password = user.hashPassword(user.password);
    user.save()
    .then(user => {return res.send({ status:'success', message:'registerd successfuly'})})
    .catch( error => {
        console.log(error);
        return res.send({ status:'error', message:error})})
}

app.post('/api/register', [
    check('name', 'please enter your full name').not().isEmpty(),
    check('name', 'your name must not contain any numbers').isAlpha(),
    check('email','your email is not valid').isEmail(),
     check('email', 'email already exist').custom(
        function(value){
            return User.findOne({email:value}).then(user => !user)
            }),
    check('password','your password should be more than 3 charchters').isLength({min:3}),
    check('con_password','your password confirmation dose not match').custom(
        (value, {req}) => value === req.body.password
    )
] ,register);

// Login
var login = (req, res) =>{
    console.log(req.body.email);
    User.findOne({
      email: req.body.email
    })
      .then(function(user) {
        if (!user) {
          return res.send({ error: true, message: "User does not exist!" });
        }
        if (!user.comparePassword(req.body.password, user.password)) {
          return res.send({ error: true, message: "Wrong password!" });
        }
        req.session.user = user;
        req.session.isLoggedIn = true;
        return res.send({ message: "You are signed in" });
        res.send(user);
      })
      .catch(function(error) {
        console.log(error); 
      });
    }

app.post('/api/login', login);

//logout
var logout = (req, res) => {
    req.session.destroy();
    res.json({logout: true});
};
app.get('/api/logout', logout);

//current user "session"
var current = (req, res) => {
    if( req.session.user )
        User.findById( req.session.user._id )
            .then( user => { return user ? res.json(user) : res.status(422).json({msg: 'The authentication failed.'}) })
            .catch( err => console.log(err));
    else
        res.status(422).json({msg: 'The authentication failed'})
};
app.get('/api/currentuser', current)




app.listen(8000);
console.log('listening to port 8000')

