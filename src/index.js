function refreshWeatherInformation(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let icon = `<img 
  src="${response.data.condition.icon_url}" 
  class="weather-temperature-icon"
  />`;
  let currentConditions = response.data.condition.description;
  let currentHumidity = Math.round(response.data.temperature.humidity);
  let currentWind = Math.round(response.data.wind.speed);

  let temperatureElement = document.querySelector("#weather-temperature");
  let iconElement = document.querySelector("#weather-temperature-icon");
  let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = currentTemperature;
  iconElement.innerHTML = icon;
  conditionsElement.innerHTML = currentConditions;
  humidityElement.innerHTML = `${currentHumidity}%`;
  windElement.innerHTML = `${currentWind} km/hr`;

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

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchWeatherCity("London");
