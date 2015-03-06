var exports = module.exports = {};

exports.getAccount = function(callback) {
  get_request('https://api.digitalocean.com/v2/account', callback);
};

exports.getActions = function(id, status, type, started_at, completed_at, resource_id, resource_type, region, region_slug, callback) {
  get_request_with_parameter('https://api.digitalocean.com/v2/actions', {
    id: id,
    status: status,
    type: type,
    started_at: started_at,
    completed_at: completed_at,
    resource_id: resource_id,
    resource_type: resource_type,
    region: region,
    region_slug: region_slug
  }, callback);
};

exports.getAction = function(action_id, callback) {
  get_request('https://api.digitalocean.com/v2/actions/' + action_id, callback);
};

exports.getDomains = function(callback) {
  get_request('https://api.digitalocean.com/v2/domains/', callback);
};

exports.addDomains = function(name, ip_address, callback) {
  post_request('https://api.digitalocean.com/v2/domains/', {
    name: name,
    ip_address: ip_address
  }, callback);
};

exports.getDomain = function(name, callback) {
  get_request('https://api.digitalocean.com/v2/domains/' + name, callback);
};

exports.deleteDomain = function(name, callback) {
  delete_request('https://api.digitalocean.com/v2/domains/' + name, callback);
};

exports.getDomainRecords = function(name, callback) {
  get_request('https://api.digitalocean.com/v2/domains/' + name + '/records', callback);
};

exports.addDomainRecord = function(domain_name, type, name, data, priority, port, weight, callback) {
  post_request('https://api.digitalocean.com/v2/domains/' + name + '/records', {
    type: type,
    name: name,
    data: data,
    priority: priority,
    port: port,
    weight: weight
  } callback);
};

exports.getDomainRecord = function(record_id, callback) {
  get_request('https://api.digitalocean.com/v2/domains/' + name + '/records/' + record_id, callback);
};

exports.getImages = function(callback) {
  get_request(
    'https://api.digitalocean.com/v2/images',
    callback
  );
};
