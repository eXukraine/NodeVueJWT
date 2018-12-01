const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('../server/routes/user')


mongoose.connect('mongodb://localhost:27017/jwtauth', { useNewUrlParser: true })
.then(() => console.log('MongoDB conected...'))
.catch(err => console.log(err));





const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', user);


app.use((req, res, next) => {
    res.status(404);
    res.json({
      status: 404,
      message: 'Route not found! server',
    });
    next();
  });
  
  app.use((err, req, res, next) => {
    res.status(500);
    res.json({
      status: 500,
      message: err.message,
    });
    next();
  });






module.exports = app;