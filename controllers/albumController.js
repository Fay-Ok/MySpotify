var async = require('async');
var sendGetRequest = require('./../routes/sendGetRequest');
var albumIds = [];
var albumsInfo = {};
var albumUrl = 'https://api.spotify.com/v1/albums/';


function buildAlbumApi(sendGetRequest) {

    function getArtistAlbums(url, callback) {

        sendGetRequest.getApiEndPoint(url, function (err, data) {

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

        sendGetRequest.getApiEndPoint(newRoute, function (err, data) {

            albumsInfo[id] = {};
            albumsInfo[id]['albumName'] = JSON.parse(data).name;
            albumsInfo[id]['artistName'] = JSON.parse(data).artists[0].name;
            albumsInfo[id]['releaseDate'] = JSON.parse(data).release_date;
            albumsInfo[id]['image'] = JSON.parse(data).images[0].url;

            callback(null, albumsInfo[id]);
        })


    };

    return {
        getAlbumInfo: getAlbumInfo,
        getArtistAlbums: getArtistAlbums,
        albumsInfo: albumsInfo
    }

}
module.exports = buildAlbumApi;