var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var config = require('./config/configuration');

const db = require('./models');
db.mongoose.connect('mongodb://' + db.url, {
    useNewUrlParser : true,
    useUnifiedTopology : true 
}).then(console.log('conected to the database')).catch(err => {
    console.log('canot connected to the database', err);
    process.exit();
});    

var app = express();

// for mongoose api


// cors
const cors = require("cors");
var corsOptions = {origin: "http://localhost:3001"};

app.use(cors(corsOptions));

//routes
require("./routes/tutorial.routes")(app);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
