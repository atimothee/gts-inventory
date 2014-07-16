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

router.delete('/records', function(req, res){
	console.log('delete record req '+req.query)
	db.database.remove(req.query._id, req.query._rev, function(err, res){
		console.log('err '+err)
		console.log('res '+res)
	})
	res.send(200, "OK")

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

router.delete('/products', function(req, res){
	console.log('request response is'+JSON.stringify(req.query))
	db.database.remove(req.query._id, req.query._rev, function(err, res){
		console.log('err '+err)
		console.log('res '+res)
	})
	res.send(200, "OK")
})

router.delete('/products/:id', function(req, res){
	console.log('id is '+req.params.id)
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
		console.log('saved');
	})
})

router.delete('/customers', function(req, res){
	console.log("delete request " + JSON.stringify(req.query));

	db.database.remove(req.query._id, req.query._rev, function (err, res) {
      console.log('error '+err)
      console.log('response '+res)
  })
	res.send(200, "OK");
});

router.post('/api/sessions', function(req, res) {
    sessions.login(req.body.username, req.body.password, function(err, cookie) {
      if (err) {
        res.json(401, {error: true});
      }
      else {
      	console.log("cookie is "+cookie)
        res.cookie(cookie);
        res.send(req.body);
      }
    })
  });

router.delete('/api/sessions', function(req, res) {
    sessions.removeLoggedInUser(req.cookies['AuthSession']);
    res.clearCookie('AuthSession');
    res.send(200, "OK");
  })


module.exports = router;
