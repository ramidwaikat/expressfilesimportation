const express = require("express");
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const mysql = require("mysql2");
var bodyParser = require("body-parser");
const methodOverride = require("method-override");
const filesRouter = require("./routes/filesRouter");
const rawDataRouter = require("./routes/rawDataRouter");
 
// const globalErrorHandler = require('./controllers/errorController');

// MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Data sanitization against Cross Site Scripting (XSS)
// app.use(xss());

// //Set security HTTP headers
// app.use(helmet());

// Limit requests from same API
// const limiter = rateLimit({
//     max: 100,
//     windowMs: 60 * 60 * 1000,
//     message: 'Too many requests from this IP, please try again in an hour!'
//   });
//   app.use('/', limiter);

 
 
 
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "filesimportation",
// });

// Solve Access-Control-Allow-Origin, there are libraries may used, but i think this enough for now
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", filesRouter);

app.use("/", rawDataRouter);

// How I will  handle data diversity?

// Problem

// No fixed schemas
// No fixed columns
// No fixed ordering of columns
// No fixed columns names

// Ideas for SOLUTION, I think there are more than approach. this is one of them
// DATA ANALYSIS TO RECOGNIZE

// Data analysis will go through steps

// 1) Looking for explicit column names (ex. firstName, LastName, Gender, Sex, Address, City ...)
//    I will use a keywords to help detecting columns

// 2) Recognize columns not passed step 1

// KEY
// 		-the unique column will be the Primary key. 
// 		-not found? will looking for another column to assist the first column, and I start with numbers columns. 

// DATES

//		- date must have numbers, at least the year
//		-	TOP possible formats
//		-		10/08/2021 UK, 08/10/2021 US , 2021/08/2021
//		-		1st Jun 2021 
//		-	Any column without numbers will not consider as a date column
//		- Now we recognized columns, we are going to detect what is the start date and end date 
//		- logically end date after start date, but we will assume we have wrong entry. So, I will  
//		- get the Average of difference between two columns
//		
//		-
//		-
//		-
//		-
//		-
//		-
//		-
//		-
//		-
//		-
//		-
//		-
//		-
//		-
// Save data imported from csv files. Why? logging, start analyzing data from this point
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("server started ...");
});

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

module.exports = app;
