








const axios = require('axios').default; 



var express = require('express');


var router = express.Router();


router.get('/', function(req, res, next) {


  axios.get('https://api.exchangerate-api.com/v4/latest/USD')


	.then((r) => {
    


					res.send(r.data);




  });
});


/*

	router.post('/', function(req, res, next) {


  		console.log(req.body);
  		res.status(200).send();





	});


*/

module.exports = router;