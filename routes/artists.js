var express = require('express');
var router = express.Router();
var https = require("https");
var async = require('async');
var request = require('request');
var albumController = require('./albumController');

var AndreaBocelliID = '3EA9hVIzKfFiQI0Kikz2wo';
var albumUrl = 'https://api.spotify.com/v1/albums/';
var artistsURL = 'https://api.spotify.com/v1/artists/' + AndreaBocelliID + '/albums';
var albumIds = [];
var albumsInfo = {};



router.get('/', function (req, res) {


    albumController.get(artistsURL, function (err, data) {

        JSON.parse(data).items.reduce(function (curr, elem) {
            albumIds.push(elem.id);
        }, 0);


        async.map(albumIds, secondFunction, function (err, data) {

            res.render('album', {
                albumsInfo: albumsInfo
            });
        });
    });


});


function secondFunction(id, callback) {

    var newRoute = albumUrl + id;

    albumController.get(newRoute, function (err, data) {

        albumsInfo[id] = {};
        albumsInfo[id]['albumName'] = JSON.parse(data).name;
        albumsInfo[id]['artistName'] = JSON.parse(data).artists[0].name;
        albumsInfo[id]['releaseDate'] = JSON.parse(data).release_date;
        albumsInfo[id]['image'] = JSON.parse(data).images[0].url;

        callback();
    });
};

var albumController = require('./albumController');


module.exports = router;
