const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/current', weatherController.getWeather);
router.get('/coords', weatherController.getWeatherByCoords);
router.get('/search', weatherController.searchCities);

module.exports = router;