var express = require('express');
var router = express.Router();
var http = require("https");
var artists= require('./artists');

router.get('/', function (req, res) {


    var hosturl = "https://api.spotify.com/v1/albums/6o3IHsicfmVMBcrEtpFpXQ";


    http.request(hosturl, function (response) {
        var str = "";
        response.on("data", function (chunck) {
            str += chunck;

        });

        response.on("end", function () {


            // res.send(JSON.parse(str));
            var image = JSON.parse(str).images[0].url;
            var artistName = JSON.parse(str).artists[0].name;
            var album = JSON.parse(str).name;
            var releaseDate = JSON.parse(str).release_date;
            res.render('album', {image: image, artistName: artistName, album: album, releaseDate: releaseDate});
            console.log(image);
        });

        response.on('error', function (e) {
            console.log("Got error: " + e.message);
        });

    }).end();

});

module.exports = router;