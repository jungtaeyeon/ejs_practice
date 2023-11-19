var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '연극예매사이트', pageName: "home.ejs" });
});
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: "auth/login.ejs"});
});
router.get("/mov/movie", function (req, res, next) {
  // app.js -> path 라이브러리 __dirname, views
  res.render("index", { title: "영화", pageName: "mov/movie.ejs" });
});

module.exports = router;
