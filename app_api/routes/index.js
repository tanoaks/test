var express = require('express');

var router = express.Router();
var user=require('../controllers/user');
var everything=require('../controllers/everything');

/* GET home page. */
//router.get('/', ctrlMain.index);
router.post('/addUser', user.addUser);
router.post('/addfield', everything.addconfig);
router.get('/getfield', everything.getConfig);




module.exports = router;
