var config = {
	couchdb:{}
};

config.couchdb.url = 'http://127.0.0.1:5984/gts';
config.couchdb.baseUrl = 'http://127.0.0.1';
config.couchdb.databaseName = 'gts';
config.couchdb.port = 5984;
//config.couchdb.secureUrl = 'https://username:password@couchserver:port/database';
config.couchdb.secondsToInvalidateEvents = 120;
config.couchdb.secondsToFlushVotes = 10;

config.cookiesecret = 'sdihfdskjh332r234';

module.exports = config;
