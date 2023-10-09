var cityNameInput = document.querySelector("#city-name");
var submit = document.getElementById("submit");
var historyContainer = document.getElementById("history-container")
var todayIn = document.querySelector(".today-in")
var date1 = document.querySelector(".date1")
var wind1text = document.querySelector(".wind1")
var temp1text = document.querySelector(".temp1")
var hum1text = document.querySelector(".hum1")
var image1 = document.getElementById("image1")

var date2 = document.querySelector(".date2")
var wind2text = document.querySelector(".wind2")
var temp2text = document.querySelector(".temp2")
var hum2text = document.querySelector(".hum2")
var image2 = document.getElementById("image2")

var date3 = document.querySelector(".date3")
var wind3text = document.querySelector(".wind3")
var temp3text = document.querySelector(".temp3")
var hum3text = document.querySelector(".hum3")
var image3 = document.getElementById("image3")

var date4 = document.querySelector(".date4")
var wind4text = document.querySelector(".wind4")
var temp4text = document.querySelector(".temp4")
var hum4text = document.querySelector(".hum4")
var image4 = document.getElementById("image4")

var date5 = document.querySelector(".date5")
var wind5text = document.querySelector(".wind5")
var temp5text = document.querySelector(".temp5")
var hum5text = document.querySelector(".hum5")
var image5 = document.getElementById("image5")

var date6 = document.querySelector(".date6")
var wind6text = document.querySelector(".wind6")
var temp6text = document.querySelector(".temp6")
var hum6text = document.querySelector(".hum6")
var image6 = document.getElementById("image6")

var savedSearches = []

// var button = document.querySelector(".btn1")
// var cityDisplay = document.querySelector("#city");
// var forecastContainter = document.querySelector(".forecast-container");

if (localStorage.getItem("cityNames")) {
    savedSearches = JSON.parse(localStorage.getItem("cityNames"))
    populateContainer()
}

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
    savedSearches.push(city)
    localStorage.setItem("cityNames", JSON.stringify(savedSearches))
    // cityDisplay.textContent = '';
    // forecastContainter.textContent = '';
    save.addEventListener("click", function() {
        getLonAndLat(city)
    })
    todayIn.textContent = cityNameInput.value;
    cityNameInput.value = '';
  } else {
    alert('Please enter a real city');
  }

});

function populateContainer() {
    for (var i = 0; i < savedSearches.length; i++) {
        var savedCity = document.createElement("button");
        savedCity.textContent = savedSearches[i]
        historyContainer.appendChild(savedCity)
        savedCity.addEventListener('click', function(event) {
            var cityName = event.target.textContent;
            getLonAndLat(cityName);
        });
    }
}

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
    var api = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=4587fd4a8c5e5c55568c068a80aaffee"
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
    var iconCode1 = data.list[0].weather[0].icon
    console.log(iconCode1)
    var icon = "http://openweathermap.org/img/wn/" + iconCode1 + ".png"
    image1.src = icon


    var apiDate2 = data.list[7].dt_txt;
    console.log(apiDate2);
    var takeDate2 = apiDate2.split(" ")
    date2.textContent = "(" + takeDate2[0] + ")"
    var wind2 = data.list[7].wind.speed;
    console.log(wind2);
    wind2text.textContent = wind2 + "MPH";
    var hum2 = data.list[7].main.humidity;
    hum2text.textContent = hum2 + "%"
    var temp2 = data.list[7].main.temp;
    temp2text.textContent = ((temp2 - 273.15) * 9/5 + 32).toFixed(2) + " °F"
    var iconCode2 = data.list[7].weather[0].icon
    console.log(iconCode2)
    var icon = "http://openweathermap.org/img/wn/" + iconCode2 + ".png"
    image2.src = icon

    var apiDate3 = data.list[15].dt_txt;
    console.log(apiDate3);
    var takeDate3 = apiDate3.split(" ")
    date3.textContent = "(" + takeDate3[0] + ")"
    var wind3 = data.list[15].wind.speed;
    console.log(wind3);
    wind3text.textContent = wind3 + "MPH";
    var hum3 = data.list[15].main.humidity;
    hum3text.textContent = hum3 + "%"
    var temp3 = data.list[15].main.temp;
    temp3text.textContent = ((temp3 - 273.15) * 9/5 + 32).toFixed(2) + " °F"
    var iconCode3 = data.list[15].weather[0].icon
    console.log(iconCode3)
    var icon = "http://openweathermap.org/img/wn/" + iconCode3 + ".png"
    image3.src = icon

    var apiDate4 = data.list[23].dt_txt;
    console.log(apiDate4);
    var takeDate4 = apiDate4.split(" ")
    date4.textContent = "(" + takeDate4[0] + ")"
    var wind4 = data.list[23].wind.speed;
    console.log(wind4);
    wind4text.textContent = wind4 + "MPH";
    var hum4 = data.list[23].main.humidity;
    hum4text.textContent = hum4 + "%"
    var temp4 = data.list[23].main.temp;
    temp4text.textContent = ((temp4 - 273.15) * 9/5 + 32).toFixed(2) + " °F"
    var iconCode4 = data.list[23].weather[0].icon
    console.log(iconCode4)
    var icon = "http://openweathermap.org/img/wn/" + iconCode4 + ".png"
    image4.src = icon

    var apiDate5 = data.list[31].dt_txt;
    console.log(apiDate5);
    var takeDate5 = apiDate5.split(" ")
    date5.textContent = "(" + takeDate5[0] + ")"
    var wind5 = data.list[31].wind.speed;
    console.log(wind5);
    wind5text.textContent = wind5 + "MPH";
    var hum5 = data.list[31].main.humidity;
    hum5text.textContent = hum5 + "%"
    var temp5 = data.list[31].main.temp;
    temp5text.textContent = ((temp5 - 273.15) * 9/5 + 32).toFixed(2) + " °F"
    var iconCode5 = data.list[31].weather[0].icon
    console.log(iconCode5)
    var icon = "http://openweathermap.org/img/wn/" + iconCode5 + ".png"
    image5.src = icon

    var apiDate6 = data.list[39].dt_txt;
    console.log(apiDate6);
    var takeDate6 = apiDate6.split(" ")
    date6.textContent = "(" + takeDate6[0] + ")"
    var wind6 = data.list[39].wind.speed;
    console.log(wind6);
    wind6text.textContent = wind6 + "MPH";
    var hum6 = data.list[39].main.humidity;
    hum6text.textContent = hum6 + "%"
    var temp6 = data.list[39].main.temp;
    temp6text.textContent = ((temp6 - 273.15) * 9/5 + 32).toFixed(2) + " °F"
    var iconCode6 = data.list[39].weather[0].icon
    console.log(iconCode6)
    var icon = "http://openweathermap.org/img/wn/" + iconCode6 + ".png"
    image6.src = icon
  })
}
