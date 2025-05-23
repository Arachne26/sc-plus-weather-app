function refreshWeatherInformation(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let icon = `<img 
  src="${response.data.condition.icon_url}" 
  class="weather-temperature-icon"
  />`;
  let currentConditions = response.data.condition.description;
  let currentHumidity = Math.round(response.data.temperature.humidity);
  let currentWind = Math.round(response.data.wind.speed);
  let date = new Date(response.data.time * 1000);

  let temperatureElement = document.querySelector("#weather-temperature");
  let iconElement = document.querySelector("#weather-temperature-icon");
  let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");

  temperatureElement.innerHTML = currentTemperature;
  iconElement.innerHTML = icon;
  conditionsElement.innerHTML = currentConditions;
  humidityElement.innerHTML = `${currentHumidity}%`;
  windElement.innerHTML = `${currentWind} km/hr`;
  timeElement.innerHTML = formatDate(date);

  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = response.data.city;
}

function searchWeatherCity(city) {
  let apiKey = "9fbt478b0201aaf4ac851870f23ea7o1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeatherInformation);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchWeatherCity(searchInput.value);
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchWeatherCity("London");
