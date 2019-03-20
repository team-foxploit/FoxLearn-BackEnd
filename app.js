const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Sub-Routes
// const productRoutes = require('./api/routes/products');
// const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/UserRoutes');

// Connection to the mongodb database
mongoose.connect("mongodb://heroku_65j68qcv:"+process.env.MONGODB_PW+"@ds161345.mlab.com:61345/heroku_65j68qcv", {
    useNewUrlParser: true
  },
  (err, client) => {
    if (err) {
      console.log(err);
      console.log(client);      
    }else{
        console.log('connected to mongo!!!');
    }
  });

// Middle-wares
app.use(morgan('dev'));     // Loggin middle-ware
app.use(bodyparser.urlencoded({extended: false}));  // Body-parser for url encoded data
app.use(bodyparser.json()); // Body-parser for JSON data

// CORS Handling middle-ware
app.use((req, res, next) => {
    // In the production build, replace "*" with the url of the client side application
    // [Restricting for only specified domain]
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Route handlers
// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware for bad requsets
app.use((req, res, next) => {
    const error = new Error('Not found.');
    error.status = 404;
    next(error);
});

// Error handling middleware for function/database errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
    next();
});

module.exports = app;