var async = require('async');
var albumModel = require('./albumModel');
var albumIds = [];
var albumsInfo = {};
var albumUrl = 'https://api.spotify.com/v1/albums/';


function buildAlbumApi(albumModel) {

    function getArtistAlbums(url, callback) {

        albumModel.getAlbumsIds(url, function (err, data) {

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

        albumModel.getAlbumsIds(newRoute, function (err, data) {

            albumsInfo[id] = {};
            albumsInfo[id]['albumName'] = JSON.parse(data).name;
            albumsInfo[id]['artistName'] = JSON.parse(data).artists[0].name;
            albumsInfo[id]['releaseDate'] = JSON.parse(data).release_date;
            albumsInfo[id]['image'] = JSON.parse(data).images[0].url;
            callback();
        })


    };

    return {
        getAlbumInfo: getAlbumInfo,
        getArtistAlbums: getArtistAlbums,
        albumsInfo: albumsInfo
    }

}
module.exports = buildAlbumApi;