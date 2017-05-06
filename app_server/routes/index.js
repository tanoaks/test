var express = require('express');

var router = express.Router();
var ctrlMain=require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
/* GET home page. */
//router.get('/', ctrlMain.index);
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/about', ctrlOthers.about);
router.get('/sock', ctrlOthers.addUser);



module.exports = router;
