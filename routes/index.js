var express = require('express');
var router = express.Router();
var db = require('../db')


router.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

router.get('/records', function(req, res){
	db.findAllRecords(function(error, docs){
		if(error){
			res.send("error")
		}else{
			res.json(docs)
		}
	})

})
router.post('/records', function(req, res){
	console.log('request response is'+req.body)
	db.save(req.body, function(error, docs){
		console.log('saved')
	})

})

router.get('/records/:id', function(req, res){
	db.findRecordById(req.params.id, function(error, docs){
		if(error){
			res.send("error")
		}else{
			res.json(docs)
		}
	})

})

router.get('/products', function(req, res){
	db.findAllProducts(function(error, docs){
		if(error){
			res.send("error")
		}else{
			res.json(docs)
		}
	})

})

router.get('/products/:id', function(req, res){
	db.findProductById(req.params.id, function(error, docs){
		if(error){
			res.send("error")
		}else{
			res.json(docs)
		}
	})

})

router.get('/customers', function(req, res){
	db.findAllCustomers(function(error, docs){
		if(error){
			res.send("error")
		}else{
			res.json(docs)
		}
	})

})

router.get('/customers/:id', function(req, res){
	db.findCustomerById(req.params.id, function(error, docs){
		if(error){
			res.send("error")
		}else{
			res.json(docs)
		}
	})

})

module.exports = router;
