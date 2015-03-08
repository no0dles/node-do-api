# node-do-api
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

DigitalOcean API v2.0 for Node.js


## Installation
```
npm install do-api --save
```

## Configuration
Create a api token on digitalocean and save it under `config/Default.json`
```json
{
  "Token": "y0wCcq9UvKuSHm39q5FQqbT6K8oU7o1D2Fc723658ds1DHyXzkztt0sFQRG8JplK"
}
```

## Code Example

```js
var api = require('do-api');

api.getAccount()
  .then(function(account) {
    ...
  })
  .fail(function (error) {
    ...
  });
```

## Usage

For further details visit the original API Documentation on [here](https://developers.digitalocean.com/documentation/v2/)

### Account
```js
api.getAccount()
  .then(function(account) {
    ...
  });
```
### Actions
#### Get all actions
```js
api.getActions()
  .then(function(actions) {
    ...
  });
```
#### Get action by id
```js
api.getAction(action_id)
  .then(function(action) {
    ...
  });
```
### Domains
#### Get all domains
```js
api.getDomains()
  .then(function(domains) {
    ...
  });
```
#### Get domain by name
```js
api.getDomain(name)
  .then(function(domain) {
    ...
  });
```
#### Add domain
```js
api.addDomain(name, ip_address)
  .then(function(domain) {
    ...
  });
```
#### Delete domain
```js
api.deleteDomain(name)
  .then(function() {
    ...
  });
```
### Domain Records
#### Get all records of by domain name
```js
api.getDomainRecords(domain_name)
  .then(function(records) {
    ...
  });
```
#### Get domain record by id
```js
api.getDomainRecord(record_id)
  .then(function(record) {
    ...
  });
```
#### Add record to a domain
```js
api.addDomainRecord(domain_name, type, name, data, priority, port, weight)
  .then(function(domain) {
    ...
  });
```
#### Update an existing domain record
```js
api.updateDomainRecord(domain_name, record_id, type, name, data, priority, port, weight)
  .then(function(domain) {
    ...
  });
```
#### Delete domain record
```js
api.deleteDomainRecord(domain_name, record_id)
  .then(function() {
    ...
  });
```
### Droplets
#### Get your droplets
```js
api.getDroplets()
  .then(function(droplets) {
    ...
  });
```
#### Get droplet by id
```js
api.getDroplet(domain_id)
  .then(function(droplet) {
    ...
  });
```
#### Create droplet
```js  
api.addDroplet(name, region, size, image, ssh_keys, backups, ipv6, user_data, private_networking)
  .then(function(droplet) {
    ...
  });
```
#### Delete droplet by id
```js  
api.deleteDroplet(droplet_id)
  .then(function() {
    ...
  });
```
#### Get available droplet kernels
```js  
api.getDropletKernels(droplet_id)
  .then(function(kernels) {
    ...
  });
```
#### Get droplet snapshots
```js  
api.getDropletSnapshots(droplet_id)
  .then(function(snapshots) {
    ...
  });
```
#### Get droplet backups
```js  
api.getDropletBackups(droplet_id)
  .then(function(backups) {
    ...
  });
```
#### Get droplet actions
```js  
api.getDropletActions(droplet_id)
  .then(function(actions) {
    ...
  });
```
#### Get droplet neighbors
```js  
api.getDropletNeighbors(droplet_id)
  .then(function(droplets) {
    ...
  });
```
#### Get neighbors
```js  
api.getNeighbors()
  .then(function(neighbors) {
    ...
  });
```

### Droplet Actions
#### Disable backup on droplet
```js
api.disableBackupOnDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Reboot droplet
```js
api.rebootDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### PowerCycle droplet
```js
api.powerCycleDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Shutdown droplet
```js
api.shutdownDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Power Off droplet
```js
api.powerOffDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Power On droplet
```js
api.powerOnDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Restore droplet
```js
api.restoreDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Reset password on droplet
```js
api.passwordResetOnDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Resize droplet
```js
api.resizeDroplet(droplet_id, size)
  .then(function(action) {
    ...
  });
```
#### Rebuild droplet
```js
api.rebuildDroplet(droplet_id, image)
  .then(function(action) {
    ...
  });
```
#### Rename droplet
```js
api.renameDroplet(droplet_id, name)
  .then(function(action) {
    ...
  });
```
#### Change kernel on droplet
```js
api.changeKernelOnDroplet(droplet_id, kernel)
  .then(function(action) {
    ...
  });
```
#### Enable ipv6 on droplet
```js
api.enableIpv6OnDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Enable private networking on droplet
```js
api.enablePrivateNetworkingOnDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Snapshot droplet
```js
api.snapshotDroplet(droplet_id, name)
  .then(function(action) {
    ...
  });
```
#### Upgrade droplet
```js
api.upgradeDroplet(droplet_id)
  .then(function(action) {
    ...
  });
```
#### Get action of droplet
```js
api.getDropletAction(droplet_id, action_id)
  .then(function(action) {
    ...
  });
```

### Images
#### Get images
```js
api.getImages()
  .then(function(images) {
    ...
  });
```
#### Get distribution images
```js
api.getDistributionImages()
  .then(function(images) {
    ...
  });
```
#### Get application images
```js
api.getApplicationImages()
  .then(function(images) {
    ...
  });
```
#### Get user images
```js
api.getUserImages()
  .then(function(images) {
    ...
  });
```
#### Get image
```js
api.getImage(image_id)
  .then(function(image) {
    ...
  });
```

### Image Actions
#### Get action of image
```js
api.getImageAction(image_id, action_id)
  .then(function(action) {
    ...
  });
```
#### Update name of image
```js
api.updateImage(image_id, name)
  .then(function(image) {
    ...
  });
```
#### Delete Image by id
```js
api.deleteImage(image_id)
  .then(function() {
    ...
  });
```
#### Transfer image
```js
api.transferImage(image_id, region)
  .then(function(action) {
    ...
  });
```
### SSH Keys
#### Get SSH Keys
```js
api.getSSHKeys()
  .then(function(keys) {
    ...
  });
```
#### Add SSH key
```js
api.addSSHKey(name, public_key)
  .then(function(key) {
    ...
  });
```
#### Get SSH key by id
```js
api.getSSHKey(key_id)
  .then(function(key) {
    ...
  });
```
#### Update name of SSH key
```js
api.updateSSHKey(key_id, name)
  .then(function(key) {
    ...
  });
```
#### Delete SSH key
```js
api.deleteSSHKey(key_id)
  .then(function() {
    ...
  });
```

### Regions
#### Get regions
```js
api.getRegions()
  .then(function(regions) {
    ...
  });
```

### Sizes
#### Get sizes
```js
api.getSizes()
  .then(function(sizes) {
    ...
  });
```

[npm-image]: https://img.shields.io/npm/v/do-api.svg?style=flat
[npm-url]: https://npmjs.org/package/do-api
[downloads-image]: https://img.shields.io/npm/dm/do-api.svg?style=flat
[downloads-url]: https://npmjs.org/package/do-api
