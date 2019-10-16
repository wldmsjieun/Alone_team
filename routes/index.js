var express = require('express');
var router = express.Router();
const errorCatcher = require('../lib/async-error');
var Test = require('../models/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YouAloneLive' });
});

//DB TEST
// router.get('/test', errorCatcher(async(req, res, next) => {
//   var test = new Test({
//     content : "나는 멍청이야",
//   });

//   var data = await test.save();
//   console.log(data);
//   res.redirect('/');
// }));

/* GET home page. */
router.get('/home', errorCatcher(async(req, res, next) => {
  res.render('/', { title: 'YouAloneLive' });
}));
/* GET login page. */
router.get('/login', errorCatcher(async(req, res, next) => {
 res.render('home/login', { title: 'Login' });
}));
/* GET Mypage page. */
router.get('/mypage', errorCatcher(async(req, res, next) => {
  res.render('home/mypage', { title: 'MyPage' });
}));
/* GET Freeboard page. */
router.get('/freeboard', errorCatcher(async(req, res, next) => {
  res.render('home/freeboard', { title: 'Freeboard' });
}));
/* GET Basket page. */
router.get('/basket', errorCatcher(async(req, res, next) => {
  res.render('home/basket', { title: 'Basket' });
}));
router.get('/dips', errorCatcher(async(req, res, next) => {
  res.render('home/dips', { title: 'Dips' });
}));
module.exports = router;
