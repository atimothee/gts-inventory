var config = {};

config.couchdb = {};
config.twilio = {};

//config.couchdb.url = 'https://couchserver:port/database';
config.couchdb.url = 'http://127.0.0.1:5984/gts'
//config.couchdb.secureUrl = 'https://username:password@couchserver:port/database';
config.couchdb.secondsToInvalidateEvents = 120;
config.couchdb.secondsToFlushVotes = 10;

config.twilio.sid = 'ACxxx';
config.twilio.key = 'yyy';
config.twilio.disableSigCheck = false;

config.cookiesecret = 'make-this-a-secret';

module.exports = config;
