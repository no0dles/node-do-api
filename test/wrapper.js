var chai = require('chai');
var should = chai.should();

var wrapper = require('../wrapper');

describe('getAccount', function () {
    var error, response, content;

    before(function(done) {
        wrapper.getAccount(function (err, resp, cont) {
            error = err;
            response = resp;
            content = cont;

            done();
        });
    });

    it('error should not exist', function () { should.not.exist(error); });
    it('response should exist', function () { should.exist(response); });
    it('content should exist', function () { should.exist(content); });
    it('content should be an object', function () { content.should.be.an('object'); });
    it('status should be 200', function () { response.statusCode.should.equal(200); });
    it('content should contain account', function () { should.exist(content.account); });
    it('account should contain droplet limit', function () { should.exist(content.account.droplet_limit); });
    it('account should contain email', function () { should.exist(content.account.email); });
    it('account should contain uuid', function () { should.exist(content.account.uuid); });
    it('account should contain email_verified', function () { should.exist(content.account.email_verified); });
});


describe('getActions', function () {
    var error, response, content;

    before(function(done) {
        wrapper.getActions(null, null, null, null, null, null, null, null, null, function (err, resp, cont) {
            error = err;
            response = resp;
            content = cont;

            done();
        });
    });

    it('error should not exist', function () { should.not.exist(error); });
    it('response should exist', function () { should.exist(response); });
    it('content should exist', function () { should.exist(content); });
    it('content should be an object', function () { content.should.be.an('object'); });
    it('status should be 200', function () { response.statusCode.should.equal(200); });
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

    it('links should contain pages', function () { should.exist(content.links.pages); });
    it('meta should contain total', function () { should.exist(content.meta.total); });
});