var request = require('request');
var async = require('async');

var albumIds = [];
var albumsInfo = {};
var albumUrl = 'https://api.spotify.com/v1/albums/';

function getArtistAlbums(url, callback) {

    getAlbumsIds(url, function (err, data) {

        JSON.parse(data).items.reduce(function (curr, elem) {
            albumIds.push(elem.id);
        }, 0);

        async.map(albumIds, getAlbumInfo, function () {
            callback(null, albumsInfo);
        });
    });
};

function getAlbumInfo(id, callback) {

    var newRoute = albumUrl + id;

    getAlbumsIds(newRoute, function (err, data) {

        albumsInfo[id] = {};
        albumsInfo[id]['albumName'] = JSON.parse(data).name;
        albumsInfo[id]['artistName'] = JSON.parse(data).artists[0].name;
        albumsInfo[id]['releaseDate'] = JSON.parse(data).release_date;
        albumsInfo[id]['image'] = JSON.parse(data).images[0].url;

        callback();
    })
};

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
    getArtistAlbums: getArtistAlbums,
    getAlbumInfo: getAlbumInfo,
    getAlbumsIds: getAlbumsIds
};