const express = require('express');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const db = require('./src/db/db')
// const { createConnection } = require('typeorm');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require("morgan");

var route = require('./src/modules/routes');
const app = express(db);
if (process.env.NODE_ENV === 'development') {
    console.log("Development Environment");
    // app.use(morgan("dev", {
    //   "stream": logger.stream
    // }));
} else {
    console.log("Production Environment");
    // app.use(morgan("common", {
    //     "stream": logger.stream
    // }));
}

app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(req,res,next){
    next();
 });
app.use(route);
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
//  app.use(express.static(path.join(__dirname, 'dist'))); 
// createConnection()
//   .then(() => {
    app.listen(3001, () => {
      console.log('Server running on port 3001');
    });
//   })
//   .catch((error) => {
//     console.log('Error connecting to the database:', error);
//   });