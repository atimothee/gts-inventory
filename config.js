var config = {
	couchdb:{}
};

// config.couchdb.url = 'http://127.0.0.1:5984/gts';
// config.couchdb.baseUrl = 'http://127.0.0.1';
// config.couchdb.databaseName = 'gts';
// config.couchdb.port = 5984;
// config.couchdb.username = 'admin';
// config.couchdb.password = 'password';

// if(process.env.OPENSHIFT_NODEJS_IP){
	config.couchdb.url = 'https://timo.iriscouch.com/gts';
	config.couchdb.baseUrl = 'https://timo.iriscouch.com';
	config.couchdb.databaseName = 'gts';
	config.couchdb.port = 6984;
	config.couchdb.username = 'gts';
	config.couchdb.password = 'grace123';
//}

config.cookiesecret = 'sdihfdskjh332r234';

module.exports = config;
