var config = {
	couchdb:{}
};

// config.couchdb.url = 'http://127.0.0.1:5984/gts';
// config.couchdb.baseUrl = 'http://127.0.0.1';
config.couchdb.url = 'https://timo.iriscouch.com:6984/gts';
config.couchdb.baseUrl = 'https://timo.iriscouch.com';
config.couchdb.username = "gts";
config.couchdb.password = "grace123"
config.couchdb.databaseName = 'gts';
config.couchdb.port = 6984;
config.couchdb.secureUrl = 'https://gts:grace123@timo.iriscouch.com:6984/gts';
config.couchdb.secondsToInvalidateEvents = 120;
config.couchdb.secondsToFlushVotes = 10;

config.cookiesecret = 'sdihfdskjh332r234';

module.exports = config;
