


item1 = {};

item1.name = "super shirt"
item1.price = "$6.99"



var express = require('express');


var router = express.Router();


router.get('/', function(req, res, next) {


    


					res.send(item1);



});




module.exports = router;