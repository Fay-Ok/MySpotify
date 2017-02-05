var request = require('request');

function getAlbumsIds(url, callback) {

    request.get(url, function (err, response, body) {

        if (err) {

            callback(err);


        } else {

            callback(null, body);

        }
    }).end();
};

module.exports = {
    getAlbumsIds: getAlbumsIds
};