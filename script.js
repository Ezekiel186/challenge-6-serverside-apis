var cityNameInput = document.querySelector("#city-name");
var submit = document.getElementById("submit");
var historyContainer = document.getElementById("history-container")
// var button = document.querySelector(".btn1")
// var cityDisplay = document.querySelector("#city");
// var forecastContainter = document.querySelector(".forecast-container");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("test")
    var city = cityNameInput.value.trim();

  if (city) {
    getLonAndLat(city);
    localStorage.setItem("cityNameInput", cityNameInput.value);
    console.log(cityNameInput.value)
    var save = document.createElement("button")
    save.textContent = cityNameInput.value;
    historyContainer.appendChild(save)
    // cityDisplay.textContent = '';
    // forecastContainter.textContent = '';
    cityNameInput.value = '';
  } else {
    alert('Please enter a real city');
  }

});

function getLonAndLat(city) {
fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=4587fd4a8c5e5c55568c068a80aaffee")
  .then((response) => response.json())
  .then((data) => {
    // var location = data.results.geometry.location;
    var location = data[0];
    var lat = location.lat;
    var lon = location.lon;
    console.log("Latitude:" + lat + ", Longitude:" + lon);
    getForecast(lat, lon);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  
};
// function getLong() {
//     var lon = 
// }

// function getLat() {
//     var lat =
// }

function getForecast(lat, lon) {
    var api = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=4587fd4a8c5e5c55568c068a80aaffee"
fetch(api)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
}
