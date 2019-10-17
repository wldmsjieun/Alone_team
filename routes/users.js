var express = require('express');
var router = express.Router();
const errorCatcher = require('../lib/async-error');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
