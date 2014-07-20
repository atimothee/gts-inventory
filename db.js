var cradle = require('cradle')


var connection = new(cradle.Connection)('http://127.0.0.1', 5984, {
});

var db = connection.database('gts');

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
			console.log('returned result is '+result)
			var docs = [];
			result.forEach(function (row){
				docs.push(row);
			});
			callback(null, docs);
		}
	});
}

exports.findRecordById = function(id, callback) {
	db.view('records/all', {key:id}, function(error, doc){
		if(error){
			callback(error)
		}else{
			callback(null, doc)
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

	db.view('products/all', {key:id}, function(error, doc){
		if(error){
			callback(error)
		}else{
			callback(null, doc.row)
			console.log('product is '+JSON.stringify(doc))
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
	db.view('customers/all', {key: id}, function(error, doc){
		if(error){
			callback(error)
		}else{
			callback(null, doc)
			console.log('customer is '+JSON.stringify(doc))
		}
	})
};
