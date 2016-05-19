var mongoose = require('mongoose');
var DB = require('mongodb').Db;
var ID = require('mongodb').ObjectID;
var server = require('mongodb').Server;
DB('data', new server('localhost', 4568));
mongoose.connect('mongodb://localhost/data');
var mDB = mongoose.connection;
mDB.on('error', () => console.log('errorrrrr'));
mDB.once('open', () => console.log('open'));

exports.usersSchema = mongoose.Schema({
  username: String,
  password: String,
  userId: {type: mongoose.Schema.Types.ObjectID}
});

exports.urlsSchema = mongoose.schema({
  url: String,
  title: String,
  baseUrl: String,
  numberClicks: Number,
  id: {type: mongoose.Schema.Types.ObjectID}
});

exports.urls = mongoose.model('urls', urlsSchema);


