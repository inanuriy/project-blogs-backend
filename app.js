var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressJWT = require('express-jwt');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJWT({secret:"ITSASECRET"}).unless({
    path: [
        {url: "/", methods: ["GET"]},
        {
            url: "/authors/login",
            methods: ["POST"]
        }
    ]
}));

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        return res.status(401).send({
            message: "You are not an author, please register"
        });
    } else {
        return next();
    }
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', require('./routes/blogs'));
app.use('/authors', require('./routes/authors'));

module.exports = app;
