var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortly');

var db = mongoose.connection;

db.on('error', function () {
  console.log('errorrrrr');
});
  
db.once('open', function () {
  console.log ('connection successful');
});

module.exports = db;
