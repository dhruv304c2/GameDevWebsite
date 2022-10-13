var express = require('express');
var router = express.Router();

/* GET about me. */
router.get('/', function(req, res, next) {
  res.render('aboutme', { title: 'Dhruv Pant' });
});

module.exports = router;
