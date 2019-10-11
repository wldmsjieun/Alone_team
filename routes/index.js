var express = require('express');
var router = express.Router();
const errorCatcher = require('../lib/async-error');
var Test = require('../models/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', errorCatcher(async(req, res, next) => {
  var test = new Test({
    content : "나는 멍청이야",
  });

  var data = await test.save();
  console.log(data);
  res.redirect('/');
}));

module.exports = router;
