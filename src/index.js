function refreshWeatherInformation(response) {
  let currentTemperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = Math.round(currentTemperature);
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
