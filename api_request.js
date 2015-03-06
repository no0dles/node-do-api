var exports = module.exports = {};

var request = require('request');
var extend = require('xtend');
var qs = require('querystring');

var token = ''

exports.api_request = function(options, callback) {
  var credentials = {
    headers: {
      'Authorization': 'Bearer ' + token
    },
    json: true
  };

  options = extend(options, credentials);

  request(options, callback);
}

exports.get_request_with_parameter = function(url, parameters, callback) {
  for(var k in parameters){
    if(parameters.hasOwnProperty(k) && !parameters[k]){
      delete parameters[k];
    }
  }

  query_string = qs.stringify(parameters);

  if(query_string.length > 0) {
    url = url + '?' + query_string;
  }

  api_request({
    url: url,
    method: 'GET'
  }, callback)
};

exports.get_request = function(url, callback) {
  api_request({
    url: url,
    method: 'GET'
  }, callback)
};

exports.post_request = function(url, body, callback) {
  api_request({
    url: url,
    method: 'POST',
    body: body
  }, callback)
};

exports.put_request = function(url, body, callback) {
  api_request({
    url: url,
    body: body,
    method: 'PUT'
  }, callback)
};

exports.delete_request = function(url, callback) {
  api_request({
    url: url,
    method: 'DELETE'
  }, callback)
};
