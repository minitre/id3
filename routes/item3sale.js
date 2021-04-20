


item3sale = {};

item3sale.name = "mega shirt"
item3sale.price = "$169.99"



var express = require('express');


var router = express.Router();


router.get('/', function(req, res, next) {


    


					res.send(item3sale);



});




module.exports = router;