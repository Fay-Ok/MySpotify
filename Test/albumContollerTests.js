var albumController = require('../routes/albumController');
var albumModel = require('../routes/albumModel');
var sinon = require('sinon');
var expect = require('expect.js');


describe('buildAlbumApi', function () {

    var albumApi;
    var data = {

        'artists': [{
            'name': 'Andrea Bocelli'
        }],
        'id': '178R0jHx3EnQ5btUEkCBMb',
        'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/a1088799d0f47c8909b836a03913e43699ca9fd6',
            'width': 640
        }],
        'name': 'Romanza (20th Anniversary Edition / Deluxe)',
        'release_date': '2016-11-18',
        'release_date_precision': 'day',
        'type': 'album',
        'uri': 'spotify:album:178R0jHx3EnQ5btUEkCBMb'
    };

    beforeEach(function () {

        sinon.stub(albumModel, 'getAlbumsIds', function (err, callback) {
            callback(null, JSON.stringify(data));
        });
        albumApi = albumController(albumModel);

    });

    describe('getAlbumInfo', function () {
        it('should create correct data object', function (done) {

            var expectedData = {
                albumName: 'Romanza (20th Anniversary Edition / Deluxe)',
                artistName: 'Andrea Bocelli',
                releaseDate: '2016-11-18',
                image: 'https://i.scdn.co/image/a1088799d0f47c8909b836a03913e43699ca9fd6'
            };
            var id = '178R0jHx3EnQ5btUEkCBMb';

            albumApi.getAlbumInfo(id, function () {

                expect(typeof albumApi.albumsInfo[id]).to.equal("object");
                expect(albumApi.albumsInfo[id].albumName).to.equal(expectedData.albumName);

            });
            done();

        });
    });
});
