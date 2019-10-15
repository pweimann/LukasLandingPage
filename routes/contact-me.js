var express = require('express');
var router = express.Router();

/* GET contact me page. */
exports.index = function(req, res){
    res.render('contact-me', { title: 'Page title' });};

module.exports = router;
