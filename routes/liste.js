var express = require('express');
var router = express.Router();

/* GET List page. */
router.get('/', function(req, res, next) {
  res.render('liste', { title: 'List View for the Bathroom Mapper' });
});

module.exports = router;

