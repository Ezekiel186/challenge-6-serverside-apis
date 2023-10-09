var cityNameInput = document.querySelector("#city-name");
var submit = document.getElementById("submit");
var historyContainer = document.getElementById("history-container")
var todayIn = document.querySelector(".today-in")
var date1 = document.querySelector(".date1")
var wind1text = document.querySelector(".wind1")
var temp1text = document.querySelector(".temp1")
var hum1text = document.querySelector(".hum1")
// var button = document.querySelector(".btn1")
// var cityDisplay = document.querySelector("#city");
// var forecastContainter = document.querySelector(".forecast-container");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("test")
    var city = cityNameInput.value.trim();

  if (city) {
    getLonAndLat(city);
    // localStorage.setItem("cityNameInput", cityNameInput.value);
    console.log(cityNameInput.value)
    var save = document.createElement("button")
    save.textContent = cityNameInput.value;
    historyContainer.appendChild(save)
    todayIn.textContent = cityNameInput.value;
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
    console.log(data);
    var name = data.city.name;
    console.log(name);
    var apiDate1 = data.list[0].dt_txt;
    console.log(apiDate1);
    var takeDate1 = apiDate1.split(" ")
    date1.textContent = "(" + takeDate1[0] + ")"
    var wind1 = data.list[0].wind.speed;
    console.log(wind1);
    wind1text.textContent = wind1 + "MPH";
    var hum1 = data.list[0].main.humidity;
    hum1text.textContent = hum1 + "%"
    var temp1 = data.list[0].main.temp;
    temp1text.textContent = ((temp1 - 273.15) * 9/5 + 32).toFixed(2) + " °F"
  })
}
