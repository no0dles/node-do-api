# node-do-api
DigitalOcean API v2.0 for Node.js


```javascript
var api = require('do-api');

api.getAccount(function (error, response, body) {
  ...
});


api.getActions(id, status, type, started_at, 
  completed_at, resource_id, resource_type, 
  region, region_slug, function (error, response, body) {
  ...
});

api.getAction(1234, function (error, response, body) {
  ...
});

```
