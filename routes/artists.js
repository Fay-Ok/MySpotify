var express = require('express');
var router = express.Router();
var https = require("https");
var async = require('async');
var request = require('request');
var albumController = require('./albumController');

var AndreaBocelliID = '3EA9hVIzKfFiQI0Kikz2wo';
var albumUrl = 'https://api.spotify.com/v1/albums/';
var artistsURL = 'https://api.spotify.com/v1/artists/' + AndreaBocelliID + '/albums';


router.get('/', function (req, res) {

        albumController.getAlbum(artistsURL, function (err, data) {

            res.render('artists', {
                albumsInfo: data
            });

        });
});


module.exports = router;
