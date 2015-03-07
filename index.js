var Q = require('q');
var wrapper = require('./wrapper');
var req = require('./request');

var exports = module.exports = {};

exports.pageCrawler = function(body, element_name) {
    var deferred = Q.defer();

    if(body["links"] && body["links"]["pages"] && body["links"]["pages"]["next"]) {
        console.log(body["links"]["pages"]["next"]);

        req.get(body["links"]["pages"]["next"]).then(function(body) {
            exports.pageCrawler(body, element_name)
                .then(function (result) {
                    deferred.resolve(body[element_name].concat(result));
                }).fail(function(error) {
                    deferred.reject(error);
                });
        }).fail(function(error) {
            deferred.reject(error);
        });
    } else {
        deferred.resolve(body[element_name]);
    }

    return deferred.promise;
};

exports.getAccount = function () {
    return wrapper.getAccount()
        .then(function (body) {
            return body["account"];
        });
};

exports.getActions = function() {
    return wrapper.getActions()
        .then(function (body) {
            return exports.pageCrawler(body, "actions");
        });
};

exports.getAction = function (action_id) {
    return wrapper.getAction(action_id)
        .then(function (body) {
            return body["action"];
        });
};

exports.getDomains = function () {
    return wrapper.getDomains()
        .then(function (body) {
            return exports.pageCrawler(body, "domains");
        });
};

exports.addDomain = wrapper.addDomain;

exports.getDomain = function(name) {
    return wrapper.getDomain(name)
        .then(function (body) {
            return body["domain"];
        });
};

exports.deleteDomain = wrapper.deleteDomain;

exports.getDomainRecords = function() {
    return wrapper.getDomainRecords()
        .then(function (body) {
            return exports.pageCrawler(body, "domain_records");
        });
};

exports.addDomainRecord = wrapper.addDomainRecord;

exports.getDomainRecord = function(record_id) {
    return wrapper.getDomainRecord(record_id)
        .then(function (body) {
            return body["domain_record"];
        });
};

exports.updateDomainRecord = function(domain_name, record_id, type, name, data, priority, port, weight) {
    return wrapper.updateDomainRecord(domain_name, record_id, type, name, data, priority, port, weight)
        .then(function (body) {
            return body["domain_record"];
        });
};

exports.deleteDomainRecord = wrapper.deleteDomainRecord;

exports.addDroplet = function (name, region, size, image, ssh_keys, backups, ipv6, user_data, private_networking) {
    return wrapper.addDroplet(name, region, size, image, ssh_keys, backups, ipv6, user_data, private_networking)
        .then(function (body) {
            return body["droplet"];
        });
};

exports.getDroplet = function (droplet_id) {
    return wrapper.getDroplet(droplet_id)
        .then(function (body) {
            return body["droplet"];
        });
};

exports.getDroplets = function () {
    return wrapper.getDroplets()
        .then(function (body) {
            return exports.pageCrawler(body, "droplets");
        });
};

exports.getDropletKernels = function () {
    return wrapper.getDropletKernels()
        .then(function (body) {
            return exports.pageCrawler(body, "kernels");
        });
};

exports.getDropletSnapshots = function () {
    return wrapper.getDropletSnapshots()
        .then(function (body) {
            return exports.pageCrawler(body, "snapshots");
        });
};

exports.getDropletBackups = function () {
    return wrapper.getDropletBackups()
        .then(function (body) {
            return exports.pageCrawler(body, "backups");
        });
};

exports.getDropletActions = function () {
    return wrapper.getDropletActions()
        .then(function (body) {
            return exports.pageCrawler(body, "actions");
        });
};

exports.deleteDroplet = wrapper.deleteDroplet;

exports.getDropletNeighbors = function () {
    return wrapper.getDropletNeighbors()
        .then(function (body) {
            return exports.pageCrawler(body, "droplets");
        });
};

exports.getNeighbors = wrapper.getNeighbors;

exports.getDropletUpgrades = wrapper.getDropletUpgrades;

exports.disableBackupOnDroplet = function(droplet_id) {
    return wrapper.disableBackupOnDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.rebootDroplet = function(droplet_id) {
    return wrapper.rebootDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.powerCycleDroplet = function(droplet_id) {
    return wrapper.powerCycleDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.shutdownDroplet = function(droplet_id) {
    return wrapper.shutdownDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.powerOffDroplet = function(droplet_id) {
    return wrapper.powerOffDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.powerOnDroplet = function(droplet_id) {
    return wrapper.powerOnDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.restoreDroplet = function(droplet_id, image) {
    return wrapper.restoreDroplet(droplet_id, image)
        .then(function (body) {
            return body["action"]
        });
};

exports.passwordResetOnDroplet = function(droplet_id) {
    return wrapper.passwordResetOnDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.resizeDroplet = function(droplet_id, size) {
    return wrapper.resizeDroplet(droplet_id, size)
        .then(function (body) {
            return body["action"]
        });
};

exports.rebuildDroplet = function(droplet_id, image) {
    return wrapper.rebuildDroplet(droplet_id, image)
        .then(function (body) {
            return body["action"]
        });
};

exports.renameDroplet = function(droplet_id, name) {
    return wrapper.renameDroplet(droplet_id, name)
        .then(function (body) {
            return body["action"]
        });
};

exports.changeKernelOnDroplet = function(droplet_id, kernel) {
    return wrapper.changeKernelOnDroplet(droplet_id, kernel)
        .then(function (body) {
            return body["action"]
        });
};

exports.enableIpv6OnDroplet = function(droplet_id) {
    return wrapper.enableIpv6OnDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.enablePrivateNetworkingOnDroplet = function(droplet_id) {
    return wrapper.enablePrivateNetworkingOnDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.snapshotDroplet = function(droplet_id, name) {
    return wrapper.snapshotDroplet(droplet_id, name)
        .then(function (body) {
            return body["action"]
        });
};

exports.upgradeDroplet = function(droplet_id) {
    return wrapper.upgradeDroplet(droplet_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.getDropletAction = function(droplet_id, action_id) {
    return wrapper.getDropletAction(droplet_id, action_id)
        .then(function (body) {
            return body["action"]
        });
};

exports.getImages = function() {
    return wrapper.getImages()
        .then(function (body) {
            return exports.pageCrawler(body, "images");
        });
};

exports.getDistributionImages = function() {
    return wrapper.getDistributionImages()
        .then(function (body) {
            return exports.pageCrawler(body, "images");
        });
};

exports.getApplicationImages = function() {
    return wrapper.getApplicationImages()
        .then(function (body) {
            return exports.pageCrawler(body, "images");
        });
};

exports.getUserImages = function() {
    return wrapper.getUserImages()
        .then(function (body) {
            return exports.pageCrawler(body, "images");
        });
};

exports.getImage = function(image_id) {
    return wrapper.getImage(image_id)
        .then(function (body) {
            return body["image"];
        });
};

exports.getImageAction = function(image_id) {
    return wrapper.getImageAction(image_id)
        .then(function (body) {
            return body["actions"];
        });
};

exports.updateImage = function(image_id, name) {
    return wrapper.updateImage(image_id, name)
        .then(function (body) {
            return body["image"];
        });
};

exports.deleteImage = wrapper.deleteImage;

exports.transferImage = function (image_id, region) {
    return wrapper.transferImage(image_id, region)
        .then(function (body) {
            return body["action"];
        });
};

exports.getImageAction = function (image_id, action_id) {
    return wrapper.getImageAction(image_id, action_id)
        .then(function (body) {
            return body["action"];
        });
};

exports.getSSHKeys = function() {
    return wrapper.getSSHKeys()
        .then(function (body) {
            return exports.pageCrawler(body, "ssh_keys");
        });
};

exports.addSSHKeys = function (name, public_key) {
    return wrapper.addSSHKeys(name, public_key)
        .then(function (body) {
            return body["ssh_key"];
        });
};

exports.getSSHKey = function (key_id) {
    return wrapper.getSSHKey(key_id)
        .then(function (body) {
            return body["ssh_key"];
        });
};

exports.updateSSHKey = function (key_id, name) {
    return wrapper.updateSSHKey(key_id, name)
        .then(function (body) {
            return body["ssh_key"];
        });
};

exports.deleteSSHKeys = wrapper.deleteSSHKeys;

exports.getRegions = function() {
    return wrapper.getRegions()
        .then(function (body) {
            return exports.pageCrawler(body, "regions");
        });
};

exports.getSizes = function() {
    return wrapper.getSizes()
        .then(function (body) {
            return exports.pageCrawler(body, "sizes");
        });
};