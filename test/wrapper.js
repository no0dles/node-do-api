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