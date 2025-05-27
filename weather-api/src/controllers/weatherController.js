class WeatherController {
  constructor(openWeatherService) {
    this.openWeatherService = openWeatherService;
  }

  async getWeather(req, res) {
    const { city } = req.query;
    try {
      const weatherData = await this.openWeatherService.fetchCurrentWeather(city);
      res.status(200).json(weatherData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getWeatherByCoords(req, res) {
    const { lat, lon } = req.params;
    try {
      const weatherData = await this.openWeatherService.fetchWeatherByCoords(lat, lon);
      res.status(200).json(weatherData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async searchCities(req, res) {
    const { query } = req.query;
    try {
      const cities = await this.openWeatherService.searchCities(query);
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default WeatherController;