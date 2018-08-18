var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET the JSON data */
var pollData = JSON.stringify(JSON.parse(fs.readFileSync(__dirname + '/../public/data/polldata.json')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Voting App',
    pollData: pollData
  });
});

module.exports = router;
