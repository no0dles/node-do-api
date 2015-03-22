var chai = require('chai');
var should = chai.should();
var wrapper = require('../wrapper');

describe('getAccount', function () {
    var error, content;

    before(function(done) {
        wrapper.getAccount().then(function (cont) {
            content = cont;
        }).fail(function (err) {
            error = err;
        }).done(function () {
            done();
        });
    });

    it('error should not exist', function () { should.not.exist(error); });
    it('content should exist', function () { should.exist(content); });
    it('content should contain account', function () { should.exist(content.account); });
    it('account should contain droplet limit', function () { should.exist(content.account.droplet_limit); });
    it('account should contain email', function () { should.exist(content.account.email); });
    it('account should contain uuid', function () { should.exist(content.account.uuid); });
    it('account should contain email_verified', function () { should.exist(content.account.email_verified); });
});

describe('getActions', function () {
    this.timeout(15000);

    var error, content;

    before(function(done) {
        wrapper.getActions().then(function (cont) {
            content = cont;
        }).fail(function (err) {
            error = err;
        }).done(function () {
            done();
        });
    });

    it('error should not exist', function () { should.not.exist(error); });
    it('content should exist', function () { should.exist(content); });
    it('content should contain actions', function () { should.exist(content.actions); });
    it('content should contain links', function () { should.exist(content.links); });
    it('content should contain meta', function () { should.exist(content.meta); });
    it('action should contain id', function () { should.exist(content.actions[0].id); });
    it('action should contain status', function () { should.exist(content.actions[0].status); });
    it('action should contain type', function () { should.exist(content.actions[0].type); });
    it('action should contain started_at', function () { should.exist(content.actions[0].started_at); });
    it('action should contain completed_at', function () { should.exist(content.actions[0].completed_at); });
    it('action should contain resource_id', function () { should.exist(content.actions[0].resource_id); });
    it('action should contain resource_type', function () { should.exist(content.actions[0].resource_type); });
    it('action should contain region', function () { should.exist(content.actions[0].region); });
    it('action should contain region_slug', function () { should.exist(content.actions[0].region_slug); });

    it('meta should contain total', function () { should.exist(content.meta.total); });
});

describe('getAction', function () {
    this.timeout(15000);

    var error, content;

    before(function(done) {
        wrapper.getActions().then(function (body) {
            wrapper.getAction(body.actions[0].id).then(function (cont) {
                content = cont;
            }).fail(function (err) {
                error = err;
            }).done(function () {
                done();
            });
        });
    });

    it('error should not exist', function () { should.not.exist(error); });
    it('content should exist', function () { should.exist(content); });
    it('content should contain action', function () { should.exist(content.action); });
    it('action should contain id', function () { should.exist(content.action.id); });
    it('action should contain status', function () { should.exist(content.action.status); });
    it('action should contain type', function () { should.exist(content.action.type); });
    it('action should contain started_at', function () { should.exist(content.action.started_at); });
    it('action should contain completed_at', function () { should.exist(content.action.completed_at); });
    it('action should contain resource_id', function () { should.exist(content.action.resource_id); });
    it('action should contain resource_type', function () { should.exist(content.action.resource_type); });
    it('action should contain region', function () { should.exist(content.action.region); });
    it('action should contain region_slug', function () { should.exist(content.action.region_slug); });
});

describe('getDomains', function () {
    var error, content;

    before(function(done) {
        wrapper.getDomains().then(function (cont) {
            content = cont;
        }).fail(function (err) {
            error = err;
        }).done(function () {
            done();
        });
    });

    it('error should not exist', function () { should.not.exist(error); });
    it('content should exist', function () { should.exist(content); });
    it('content should contain domains', function () { should.exist(content.domains); });
    it('content should contain links', function () { should.exist(content.links); });
    it('content should contain meta', function () { should.exist(content.meta); });
    it('domain should contain name', function () { should.exist(content.domains[0].name); });
    it('domain should contain ttl', function () { should.exist(content.domains[0].ttl); });
    it('domain should contain zone_file', function () { should.exist(content.domains[0].zone_file); });
});


describe('getSizes', function () {
  var error, content;

  before(function(done) {
    wrapper.getSizes().then(function (cont) {
      content = cont;
    }).fail(function (err) {
      error = err;
    }).done(function () {
      done();
    });
  });

  it('error should not exist', function () { should.not.exist(error); });
  it('content should exist', function () { should.exist(content); });
  it('content should contain sizes', function () { should.exist(content.sizes); });
  it('content should contain links', function () { should.exist(content.links); });
  it('content should contain meta', function () { should.exist(content.meta); });
  it('size should contain slug', function () { should.exist(content.sizes[0].slug); });
  it('size should contain memory', function () { should.exist(content.sizes[0].memory); });
  it('size should contain vcpus', function () { should.exist(content.sizes[0].vcpus); });
  it('size should contain disk', function () { should.exist(content.sizes[0].disk); });
  it('size should contain transfer', function () { should.exist(content.sizes[0].transfer); });
  it('size should contain price_monthly', function () { should.exist(content.sizes[0].price_monthly); });
  it('size should contain price_hourly', function () { should.exist(content.sizes[0].price_hourly); });
  it('size should contain regions', function () { should.exist(content.sizes[0].regions); });
  it('size should contain available', function () { should.exist(content.sizes[0].available); });
});

describe('getRegions', function () {
  var error, content;

  before(function(done) {
    wrapper.getRegions().then(function (cont) {
      content = cont;
    }).fail(function (err) {
      error = err;
    }).done(function () {
      done();
    });
  });

  it('error should not exist', function () { should.not.exist(error); });
  it('content should exist', function () { should.exist(content); });
  it('content should contain regions', function () { should.exist(content.regions); });
  it('content should contain links', function () { should.exist(content.links); });
  it('content should contain meta', function () { should.exist(content.meta); });
  it('region should contain name', function () { should.exist(content.regions[0].name); });
  it('region should contain slug', function () { should.exist(content.regions[0].slug); });
  it('region should contain sizes', function () { should.exist(content.regions[0].sizes); });
  it('region should contain features', function () { should.exist(content.regions[0].features); });
  it('region should contain available', function () { should.exist(content.regions[0].available); });
});