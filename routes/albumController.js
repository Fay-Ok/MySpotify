var request = require('request');

function get(url, callback) {

    request.get(url, function (err, response, body) {


        if (err) {

            callback(err);

        } else {

            callback(null, body);

        }
    }).end();
};

module.exports = {
    get: get
};