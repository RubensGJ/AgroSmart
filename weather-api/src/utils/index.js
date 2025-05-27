const translateWeatherCondition = (condition) => {
  const conditionsMap = {
    Clear: 'sunny',
    Clouds: 'partly-cloudy',
    Rain: 'rainy',
    Snow: 'snowy',
    Mist: 'fog',
    Haze: 'haze',
    Thunderstorm: 'thunderstorm',
  };

  return conditionsMap[condition] || 'unknown';
};

const mapWeatherIcon = (condition) => {
  const iconMap = {
    sunny: '☀️',
    'partly-cloudy': '🌤️',
    rainy: '🌧️',
    snowy: '❄️',
    fog: '🌫️',
    haze: '🌫️',
    thunderstorm: '⛈️',
    unknown: '❓',
  };

  return iconMap[condition] || '❓';
};

export { translateWeatherCondition, mapWeatherIcon };