//API Key variable
var apiKey = "4f35a3a103e0610b506a03bd9f24a683"

//Current weather condtions Variable
var currentWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + searchInput +"&Appid=" + apiKey + "&units=imperial";
//5 day forecast variable
var weatherFiveday = "http://api.openweathermap.org/data/2.5/weather?q=" + searchInput +"&Appid=" + apiKey + "&units=imperial";

//DOM

var inputEl = document.querySelector(".input");
var BtnsubmitEl = document.querySelector(".submit");
var cityHistoryEl = document.querySelector(".history-city");
var cityName = localStorage.getItem("storeCityname");

//current weather conditions
$.ajax ({
    url: currentWeather,
    method: "GET"
})
.then(function(response) {
    $('.city').html("<h3>" + response.name + "</h3>");
    $(".weather-icon").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
    $(".temperature").text("Temperature: " + response.main.temp + "F");
    $(".humidity").text("humidity: " + response.main.humidity + "%");
    $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
    
})

