var config = require('./config')
var databaseUrl = config.couchdb.url
var nanoDb = require('nano')({url: databaseUrl})

  , loggedInUsers = {}

  , addLoggedInUser = exports.addLoggedInUser = function(authSession, user) {
      loggedInUsers[authSession] = user;
    }

  , getLoggedInUser = exports.getLoggedInUser = function(authSession) {
      return loggedInUsers[authSession]
    }

  , removeLoggedInUser = exports.removeLoggedInUser = function(authSession) {
      delete loggedInUsers[authSession]
    }
  
  , login = exports.login = function(username, password, callback) {
      nanoDb.auth(username, password, function (err, body, headers) {
        if (err) { 
          return callback(err);
        }
        var cookie = headers['set-cookie'][0];
        var authSession = cookie.split(';')[0].split('=')[1];
        addLoggedInUser(authSession, username);
        callback(null, cookie);
      });
    };
