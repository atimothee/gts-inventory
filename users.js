var cradle = require('cradle')
var config = require('./config')

var connection = new(cradle.Connection)(config.couchdb.baseUrl, config.couchdb.port, {
	auth:{"username": config.couchdb.username,"password":config.couchdb.password}
});

var db = connection.database('_users');

exports.database = db;

exports.save = function(user, callback) {
	db.save(user, function(error, result) {
		if( error ) callback(error)
			else callback(null, result);
	});
};