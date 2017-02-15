var express = require('express');
var router = express.Router();
var albumController = require('./../controllers/albumController');
var sendGetRequest = require('./sendGetRequest');

var AndreaBocelliID = '3EA9hVIzKfFiQI0Kikz2wo';
var artistsURL = 'https://api.spotify.com/v1/artists/' + AndreaBocelliID + '/albums';


router.get('/', function (req, res) {

    var albumsFunc = albumController(sendGetRequest);

    albumsFunc.getArtistAlbums(artistsURL, function (err, data) {

        res.render('artists', {
            albumsInfo: data
        });
    });
});


module.exports = router;


