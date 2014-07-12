var db = require('./db')

login = exports.login = function(username, password, callback) {
      db.auth(username, password, function (err, body, headers) {
        if (err) {
          return callback(err);
        }
        var cookie = headers['set-cookie'][0];
        var authSession = cookie.split(';')[0].split('=')[1];
        addLoggedInUser(authSession, username);
        callback(null, cookie);
      });
    };