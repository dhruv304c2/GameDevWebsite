var express = require('express');
var router = express.Router();

/* GET about me. */
router.get('/', function(req, res, next) {
    res.render('aboutme');
});

module.exports = router;
