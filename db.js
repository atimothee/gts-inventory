var cradle = require('cradle')
var config = require('./config')

var connection = new(cradle.Connection)(config.couchdb.baseUrl, config.couchdb.port, {
	auth:{"username": config.couchdb.username,"password":config.couchdb.password}
});

var db = connection.database(config.couchdb.databaseName);

exports.database = db;

exports.save = function(record, callback) {
	record.created_at = new Date();
	db.save(record, function(error, result) {
		if( error ) callback(error)
			else callback(null, result);
	});
};

exports.findAllRecords = function(callback){
	db.view('records/all',function(error, result) {
		if( error ){
			console.log('returned error is '+error)
			callback(error)
		}else{
			//console.log('returned result is '+result)
			var docs = [];
			result.forEach(function (row){
				docs.push(row);
			});
			callback(null, docs);
		}
	});
}

exports.findRecordById = function(id, callback) {
	db.view('records/all', {key:id}, function(error, result){
		if( error ){
			callback(error)
		}else{
			var doc
			result.forEach(function (row){
				doc = row
			});
			callback(null, doc);
		}
	})
};

exports.findAllProducts = function(callback){
	db.view('products/all',function(error, result) {
		if( error ){
			console.log('returned error is '+error)
			callback(error)
		}else{
			//console.log('returned result is '+result)
			var docs = [];
			result.forEach(function (row){
				docs.push(row);
			});
			callback(null, docs);
		}
	});
}

exports.findProductById = function(id, callback) {

	db.view('products/all', {key:id}, function(error, result){
		if( error ){
			callback(error)
		}else{
			var doc
			result.forEach(function (row){
				doc = row
			});
			callback(null, doc);
		}
	})
};

exports.findAllCustomers = function(callback){
	db.view('customers/all',function(error, result) {
		if( error ){
			console.log('returned error is '+error)
			callback(error)
		}else{
			//console.log('returned result is '+result)
			var docs = [];
			result.forEach(function (row){
				docs.push(row);
			});
			callback(null, docs);
		}
	});
}

exports.findCustomerById = function(id, callback) {
	db.view('customers/all', {key: id}, function(error, result){
		if( error ){
			callback(error)
		}else{
			var doc
			result.forEach(function (row){
				doc = row
			});
			callback(null, doc);
		}
	})
};

exports.findProductQuantityIn = function(opts, callback) {
	db.view('products/quantityin', opts, function(error, result){
		if( error ){
			callback(error)
		}else{
			var doc
			result.forEach(function (row){
				doc = row
			});
			callback(null, doc);
		}
	})
};
