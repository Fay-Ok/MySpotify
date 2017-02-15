var express = require('express');
var router = express.Router();
var albumModel = require('./sendGetRequest');
var albumController = require('./../controllers/albumController');

router.get('/', function (req, res) {

    var id = '6o3IHsicfmVMBcrEtpFpXQ';
    var albumFunc = albumController(albumModel);

    albumFunc.getAlbumInfo(id, function (err, data) {

        res.render('album', {albumInfo: data});

    });
});

module.exports = router;


