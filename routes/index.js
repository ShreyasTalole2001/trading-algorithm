var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("START OF INDEX ROUTER");
});

module.exports = router;
