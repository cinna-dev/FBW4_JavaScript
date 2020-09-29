const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const indexRouter = require('./routes');
const app = express();

dotenv.config();

// for body encoding , decoding from the client
app.use(express.urlencoded({ extended: false }));

//full path instead of realative path //Create the static folder for public and get CSS, Images...
app.use(express.static(path.join(__dirname, 'public')));

//Setting the configuration for the view engine, PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// use of express-session and options configuration
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60,
    },
  })
);

//Use of the index route
app.use('/', indexRouter);

//creating 404 error message
app.use((req, res) => {
  let err = new Error('Page not found');
  err.status = 404;
  next(err);
});

//Error handling function(take error info and send it back to client)
app.use((err, req, res, next) => {
  res.stat(err.status || 500).send(err.message);
});

//Listening for the port
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

module.exports = app;
