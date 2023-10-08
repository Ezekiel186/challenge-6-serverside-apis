var cityNameInput = document.querySelector("#city-name");
var submit = document.getElementById("submit");
var cityDisplay = document.querySelector("#city");
// var forecastContainter = document.querySelector(".forecast-container");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("test")
    city = cityNameInput.value.trim();

  if (city) {
    getCity(city);

    cityDisplay.textContent = '';
    // forecastContainter.textContent = '';
    cityNameInput.value = '';
  } else {
    alert('Please enter a real city');
  }

});

function getCity(city) {
    // var api = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=4587fd4a8c5e5c55568c068a80aaffee"
fetch(api)
}
