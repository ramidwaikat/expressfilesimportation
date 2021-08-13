const express = require("express");
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const mysql = require('mysql2');
var bodyParser = require('body-parser');
const methodOverride = require("method-override");
const filesRouter = require("./routes/filesRouter");
// const bp = require('body-parser');

// const globalErrorHandler = require('./controllers/errorController');
 

// MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Data sanitization against Cross Site Scripting (XSS)
// app.use(xss());

// Set security HTTP headers
// app.use(helmet()); 

// Limit requests from same API
// const limiter = rateLimit({
//     max: 100, 
//     windowMs: 60 * 60 * 1000,
//     message: 'Too many requests from this IP, please try again in an hour!'
//   });
//   app.use('/', limiter);

// app.get("/", (req, res) => {
//   res.status(200).send("hello from files importation API");
// });
// Serving static files
//app.use(express.static(`${__dirname}`));



 



var con = mysql.createConnection({
  host:'localhost',
	user:'root', 
	password:'123456',
	database:'filesimportation'
});

 
// parse application/json
//app.use(bodyParser.json());
  
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n');
//     res.write( JSON.stringify(req.body, null, 2));
//   res.end(JSON.stringify(req.body, null, 2));

// });

//  app.use((req ,res ,next)=>{
// 	 res.setHeader('Access-Control-Allow-Origin', '*'); 
// 	 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
// 	 res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
// 	 next();
//  })
 // parsing body request
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride("_method"))

// create application/x-www-form-urlencoded parser
//var urlencodedParser = express.urlencoded({ extended: false })
 

 app.use("/", filesRouter); 

 const port = process.env.PORT || 3002;

app.listen(port, () => {
//  console.log("server started ...");
});




// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });


module.exports = app;
 