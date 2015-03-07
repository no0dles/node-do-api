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
```
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

## API Reference

### Account
```js
api.getAccount()
  .then(function(account) {
    ...
  });
```
### Actions
```js
api.getActions()
  .then(function(actions) {
    ...
  });
  
api.getAction(action_id)
  .then(function(action) {
    ...
  });
```
### Domains
```js
api.getDomains()
  .then(function(domains) {
    ...
  });
  
api.getDomain(name)
  .then(function(domain) {
    ...
  });
  
api.addDomain(name, ip_address)
  .then(function(domain) {
    ...
  });
  
api.deleteDomain(name)
  .then(function() {
    ...
  });
```
### Domain Records
```js
api.getDomainRecords(domain_name)
  .then(function(records) {
    ...
  });
  
api.getDomainRecord(record_id)
  .then(function(record) {
    ...
  });
  
api.addDomainRecord(domain_name, type, name, data, priority, port, weight)
  .then(function(domain) {
    ...
  });
  
api.updateDomainRecord(domain_name, record_id, type, name, data, priority, port, weight)
  .then(function(domain) {
    ...
  });
  
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
### Images
### Image Actions
### SSH Keys
### Regions
### Sizes

[npm-image]: https://img.shields.io/npm/v/do-api.svg?style=flat
[npm-url]: https://npmjs.org/package/do-api
[downloads-image]: https://img.shields.io/npm/dm/do-api.svg?style=flat
[downloads-url]: https://npmjs.org/package/do-api
