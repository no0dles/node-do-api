var request = require('request');
var extend = require('xtend');
var config = require('config');
var qs = require('querystring');
var Q = require('q');

var exports = module.exports = {};

exports.request = function(options) {
  var deferred = Q.defer();

  var credentials = {
    headers: {
      'Authorization': 'Bearer ' + config.get('Token')
    },
    json: true
  };

  options = extend(options, credentials);

  options.url = 'https://api.digitalocean.com/v2/' + options.url;

  request(options, function(error, response, body) {
    if(error || response.statusCode >= 400) {

      deferred.reject(response.statusCode, error);
    } else {
      deferred.resolve(body)
    }
  });

  return deferred.promise;
};

exports.getWithParameter = function(url, parameters) {
  for(var k in parameters){
    if(parameters.hasOwnProperty(k) && !parameters[k]){
      delete parameters[k];
    }
  }

  var query_string = qs.stringify(parameters);

  if(query_string.length > 0) {
    url = url + '?' + query_string;
  }

  return exports.get(url);
};

exports.get = function(url) {
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