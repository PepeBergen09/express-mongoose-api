const config = require('../config/configuration');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url_local = config.db.local_db;
db.url = config.db.server_db;
db.tutorial = require("./tutorial.model.js");


module.exports = db; 