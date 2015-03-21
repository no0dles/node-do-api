var req = require('./request');

var exports = module.exports = {};

exports.getAccount = function() {
  return req.get('account');
};

exports.getActions = function() {
  return req.get('actions', true);
};

exports.getAction = function(action_id) {
  return req.get('actions/' + action_id);
};

exports.getDomains = function() {
  return req.get('domains');
};

exports.addDomain = function(name, ip_address) {
  return req.post('domains/', {
    name: name,
    ip_address: ip_address
  });
};

exports.getDomain = function(name) {
  return req.get('domains/' + name);
};

exports.deleteDomain = function(name) {
  return req.del('domains/' + name);
};

exports.getDomainRecords = function(name) {
  return req.get('domains/' + name + '/records', true);
};

exports.addDomainRecord = function(domain_name, type, name, data, priority, port, weight) {
  return req.post('domains/' + name + '/records', {
    type: type,
    name: name,
    data: data,
    priority: priority,
    port: port,
    weight: weight
  });
};

exports.getDomainRecord = function(record_id) {
  return req.get('domains/' + name + '/records/' + record_id);
};


exports.updateDomainRecord = function(domain_name, record_id, type, name, data, priority, port, weight) {
  return req.put('domains/' + domain_name + '/records/' + record_id, {
    type: type,
    name: name,
    data: data,
    priority: priority,
    port: port,
    weight: weight
  });
};

exports.deleteDomainRecord = function(domain_name, record_id) {
  return req.del('domains/' + domain_name + '/records/' + record_id);
};

exports.addDroplet = function (name, region, size, image, ssh_keys, backups, ipv6, user_data, private_networking) {
  return req.post('droplets', {
    name: name,
    region: region,
    size: size,
    image: image,
    ssh_keys: ssh_keys,
    backups: backups,
    ipv6: ipv6,
    user_data: user_data,
    private_networking: private_networking
  });
};

exports.getDroplet = function(droplet_id) {
  return req.get('droplets/' + droplet_id);
};

exports.getDroplets = function() {
  return req.get('droplets', true);
};

exports.getDropletKernels = function(droplet_id) {
  return req.get('droplets/' + droplet_id + '/kernels', true);
};

exports.getDropletSnapshots = function(droplet_id) {
  return req.get('droplets/' + droplet_id + '/snapshots', true);
};

exports.getDropletBackups = function(droplet_id) {
  return req.get('droplets/' + droplet_id + '/backups', true);
};

exports.getDropletActions = function(droplet_id) {
  return req.get('droplets/' + droplet_id + '/actions', true);
};

exports.deleteDroplet = function(droplet_id) {
  return req.del('droplets/' + droplet_id);
};

exports.getDropletNeighbors = function(droplet_id) {
  return req.get('droplets/' + droplet_id + '/neighbors', true);
};

exports.getNeighbors = function() {
  return req.get('reports/droplet_neighbors', true);
};

exports.getDropletUpgrades = function() {
  return req.get('droplet_upgrades', true);
};

exports.disableBackupOnDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'disable_backups'
  });
};

exports.rebootDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'reboot'
  });
};

exports.powerCycleDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'power_cycle'
  });
};

exports.shutdownDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'shutdown'
  });
};

exports.powerOffDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'power_off'
  });
};

exports.powerOnDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'power_on'
  });
};

exports.restoreDroplet = function(droplet_id, image) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'restore',
    image: image
  });
};

exports.passwordResetOnDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'password_reset'
  });
};

exports.resizeDroplet = function(droplet_id, size) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'resize',
    size: size
  });
};

exports.rebuildDroplet = function(droplet_id, image) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'rebuild',
    image: image
  });
};

exports.renameDroplet = function(droplet_id, name) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'rename',
    name: name
  });
};

exports.changeKernelOnDroplet = function(droplet_id, kernel) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'change_kernel',
    kernel: kernel
  });
};

exports.enableIpv6OnDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'enable_ipv6'
  });
};

exports.enablePrivateNetworkingOnDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'enable_private_networking'
  });
};

exports.snapshotDroplet = function(droplet_id, name) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'snapshot',
    name: name
  });
};

exports.upgradeDroplet = function(droplet_id) {
  return req.post('droplets/' + droplet_id + '/actions', {
    type: 'upgrade'
  });
};

exports.getDropletAction = function(droplet_id, action_id) {
  return req.get('droplets/' + droplet_id + '/actions/' + action_id);
};

exports.getImages = function() {
  return req.get('images', true);
};

exports.getDistributionImages = function() {
  return req.get('images?type=distribution', true);
};

exports.getApplicationImages = function() {
  return req.get('images?type=application', true);
};

exports.getUserImages = function() {
  return req.get('images?private=true', true);
};

exports.getImage = function (image_id) {
  return req.get('images/'+ image_id);
};

exports.updateImage = function(image_id, name) {
  return req.put('images/' + image_id, {
    name: name
  });
};

exports.deleteImage = function(image_id) {
  return req.del('images/' + image_id);
};

exports.transferImage = function(image_id, region) {
  return req.post('images/' + image_id, {
    type: 'transfer',
    region: region
  });
};

exports.getImageAction = function(image_id, action_id) {
  return req.get('images/' + image_id + '/actions/' + action_id, true);
};

exports.getSSHKeys = function() {
  return req.get('account/keys', true);
};

exports.addSSHKey = function(name, public_key) {
  return req.post('account/keys', {
    name: name,
    public_key: public_key
  });
};

exports.getSSHKey = function(key_id) {
  return req.get('account/keys/' + key_id);
};

exports.updateSSHKey = function(key_id, name) {
  return req.put('account/keys/' + key_id, {
    name: name
  });
};

exports.deleteSSHKey = function(key_id) {
  return req.del('account/keys/' + key_id);
};

exports.getRegions = function() {
  return req.get('regions/', true);
};

exports.getSizes = function() {
  return req.get('sizes/', true);
};