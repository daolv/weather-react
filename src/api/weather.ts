const baseUrl = 'https://api.openweathermap.org/data/2.5';
const REACT_APP_WEATHER_API_KEY = "940d03af0b268acf9c8b4ba4b772f232";

export const fetchWeatherData = (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=${REACT_APP_WEATHER_API_KEY}`;
  }
  return fetch(url);
};

export const fetchExtendedForecastData = (city: string | { lat: number; lng: number }) => {
 
  //https://api.openweathermap.org/data/2.5/onecall?lat=21.0222089&lon=105.81729949999999&exclude=current,hourly,minutely,alerts&appid=940d03af0b268acf9c8b4ba4b772f232
 
  //let url = `${baseUrl}/forecast/daily?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`;
  let url = `${baseUrl}/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`;
  if (typeof city === 'object') {
    url = `${baseUrl}/onecall?lat=${city.lat}&lon=${city.lng}&exclude=current,hourly,minutely,alert&appid=${REACT_APP_WEATHER_API_KEY}`;
  }
  return fetch(url);
};
