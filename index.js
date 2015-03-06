var wrapper = require('./wrapper');

var exports = module.exports = {};

exports.getAccount = function () {
    return wrapper.getAccount()
        .then(function (body) {
            return body["account"];
        })
};