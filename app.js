const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const basicRouter = require('./routes/basic');

const port = process.env.PORT || '3000';

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/basic', basicRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



app.listen(port, () => {
  console.log("Server is running on port : " + port);
})
