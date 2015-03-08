var request = require('request');
var extend = require('xtend');
var config = require('config');
var Q = require('q');

var exports = module.exports = {};

exports.per_page = 200;

exports.request = function(options) {
  var deferred = Q.defer();

  var credentials = {
    headers: {
      'Authorization': 'Bearer ' + config.get('Token')
    },
    json: true
  };

  options = extend(options, credentials);

  if(options.url.indexOf('http') == -1) {
    options.url = 'https://api.digitalocean.com/v2/' + options.url;
  }


  request(options, function(error, response, body) {
    if(error) {
      deferred.reject(error);
    } else if(response.statusCode >= 400) {
      var e = new Error(body["message"]);
      e.code = response.statusCode;
      e.errno = response.statusCode;
      e.syscall = body["id"];
      deferred.reject(e);
    } else {
      deferred.resolve(body)
    }
  });

  return deferred.promise;
};

exports.get = function(url, pages) {
  if(pages) {
    if(url.indexOf('?') == -1) {
      url += '?';
    } else {
      url += '&';
    }
    url += 'per_page=' + exports.per_page;
  }

  return exports.request({
    url: url,
    method: 'GET'
  });
};

exports.post = function(url, body) {
  return exports.request({
    url: url,
    method: 'POST',
    body: body
  });
};

exports.put = function(url, body) {
  return exports.request({
    url: url,
    body: body,
    method: 'PUT'
  });
};

exports.del = function(url) {
  return exports.request({
    url: url,
    method: 'DELETE'
  });
};