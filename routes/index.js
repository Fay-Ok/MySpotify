var express = require('express');
var router = express.Router();

/* GET home page. */


module.exports.partials = function(req, res) {
    console.log(req.params.name);
    res.render('partials/' + req.params.name);
};




// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports.index = function (req, res) {
    res.render('../views/partials/' + req.params.name);
};
// module.exports = exports;
