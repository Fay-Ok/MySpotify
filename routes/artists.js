var express = require('express');
var router = express.Router();
var albumController = require('./albumController');
var albumModel = require('./albumModel');

var AndreaBocelliID = '3EA9hVIzKfFiQI0Kikz2wo';
var artistsURL = 'https://api.spotify.com/v1/artists/' + AndreaBocelliID + '/albums';


router.get('/', function (req, res) {

    var albumsFunc = albumController(albumModel);

    albumsFunc.getArtistAlbums(artistsURL, function (err, data) {

        res.render('artists', {
            albumsInfo: data
        });
    });
});


module.exports = router;
