var express = require('express');
var router = express.Router();
var db = require('../db')
var sessions = require('../sessions')


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

router.get('/records/:id', function(req, res){
	db.findRecordById(req.params.id, function(error, docs){
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

router.post('/products', function(req, res){
	console.log('request response is'+req.body)
	db.save(req.body, function(error, docs){
		console.log('saved')
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

router.post('/customers', function(req, res){
	console.log('request response is'+req.body)
	db.save(req.body, function(error, docs){
		console.log('saved')
	})
})

router.post('/api/sessions', function(req, res){
	sessions.login(req.body.username, req.body.password, function(err, cookie) {
      if (err) {
        res.send(401, JSON.stringify({error: true}));
      }
      else {
        //var authSession = cookie.split(';')[0].split('=')[1];
        //sessions.addLoggedInUser(req.body.username, cookie);
        res.cookie(cookie);
        //req.body['authSession'] = authSession;
        res.send(req.body);
      }
    });
  })


module.exports = router;
