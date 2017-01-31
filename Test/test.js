var assert = require('assert');
var describe = require("mocha");
var getRoute = require('../routes/getRoute');
var http = require('http');
var sinon = require('sinon');
var mockery = require('mockery');
var chai = require('chai')
var chaiHttp = require('chai-http');
var beforeEach = require("mocha");
var afterEach = require("mocha");

chai.use(chaiHttp);
var expectedUrl = 'https://api.spotify.com/v1/artists/3EA9hVIzKfFiQI0Kikz2wo/albums';

describe('HTTP', function () {

    beforeEach(function() {
        this.request = sinon.stub(http, 'request');
    });

    afterEach(function() {
        http.request.restore();
    });

    describe('get ', function () {

        it('succeeds silently!', function () {
            getRoute.firstFunction(expectedUrl,callback);



        });

    });
    //add grunt test runner

});
// test calling correct url
// test data