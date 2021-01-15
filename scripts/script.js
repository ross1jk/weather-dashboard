$(function() {

 // Initial array of cities
var cityHistory = JSON.parse(localStorage.getItem("cities")) || []; 
var currentDate = moment().format('l'); 

 function displayCityInfo(){
 var city= $(this).attr("data-name"); 
 var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=101220419d85ffb610459f1145df78ff" 

 $.ajax({
   url: geoCode,
   method: "GET"
 }).then(function(response){
   console.log(response); 
   var lat = response[0].lat
   var lon = response[0].lon
   var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=101220419d85ffb610459f1145df78ff"

   $.ajax({
     url: queryURL, 
     methond: "GET"
   }).then(function(response){
    //current
    let currentWeather = "http://openweathermap.org/img/wn/" + response.current.weather[0].icon + "@2x.png"; 
    $("#icon").attr('src', currentWeather); 
    $("#selectedCity").text(city + " (" + currentDate +")");
    $("#temperature").text("Temperature: " + response.current.temp + " Fahrenheit"); 
    $("#humidity").text("Humidity: " + response.current.humidity + " %"); 
    $("#windSpeed").text("Wind Speed: " + response.current.wind_speed + " MPH"); 
    $("#uvIndex").text("UV Index: " + response.current.uvi); 
    //5Day
    //day 1 
    $("#day1").text(moment(currentDate).add('1', 'day').format('l')); 
    $("#icon1").attr("src", "http://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + "@2x.png");
    $("#temp1").text("Temperature: "+ response.daily[0].temp.day + " Fahrenheit");
    $("#humidity1").text("Humidity: " + response.daily[0].humidity + " %"); 

    //day 2
    $("#day2").text(moment(currentDate).add('2', 'day').format('l')); 
    $("#icon2").attr("src", "http://openweathermap.org/img/wn/" + response.daily[1].weather[0].icon + "@2x.png");
    $("#temp2").text("Temperature: "+ response.daily[1].temp.day + " Fahrenheit");
    $("#humidity2").text("Humidity: " + response.daily[1].humidity + " %"); 

    //day 3
    $("#day3").text(moment(currentDate).add('3', 'day').format('l')); 
    $("#icon3").attr("src", "http://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon + "@2x.png");
    $("#temp3").text("Temperature: "+ response.daily[2].temp.day + " Fahrenheit");
    $("#humidity3").text("Humidity: " + response.daily[2].humidity + " %"); 

    //day4
    $("#day4").text(moment(currentDate).add('4', 'day').format('l')); 
    $("#icon4").attr("src", "http://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + "@2x.png"); 
    $("#temp4").text("Temperature: "+ response.daily[3].temp.day + " Fahrenheit");
    $("#humidity4").text("Humidity: " + response.daily[3].humidity + " %"); 

    //day 5
    $("#day5").text(moment(currentDate).add('5', 'day').format('l')); 
    $("#icon5").attr("src", "http://openweathermap.org/img/wn/" + response.daily[4].weather[0].icon + "@2x.png");
    $("#temp5").text("Temperature: "+ response.daily[4].temp.day + " Fahrenheit");
    $("#humidity5").text("Humidity: " + response.daily[4].humidity + " %"); 
  
  });

   });
  };

 


//Looping through the array of cities 
for (var i = 0; i < cityHistory.length; i++) {
    var a = $("<button>");
    a.addClass("city btn btn-light");
    a.attr("data-name", cityHistory[i]);
    a.text(cityHistory[i]);
    // Adding the button to the buttons-view div
    $("#pastCities").append(a);
  } 


$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    // This line grabs the input from the textbox
    var city = $("#citySearch").val().trim();
    // The city from the textbox is then added to array
    cityHistory.push(city);
    localStorage.setItem("cities", JSON.stringify(cityHistory)); 
    //create button
    var b = $("<button>");
    b.addClass("city btn btn-light");
    b.attr("data-name", city);
    b.text(city);
    $("#pastCities").append(b); 
    displayCityInfo();
   });

//why isnt working? 
$(document).on("click", "#searchBtn", displayCityInfo); 
$(document).on("click", ".city", displayCityInfo);
//end of document.ready*/
}); 
/*
Search field/button
id = citySearch 
id = searchBtn
***need to make each city a button
*Main content: 
id=cityDisplay //City Heading with date image of that temp//all one, 
this is same size different lines - 

Temp F, Humidtity %, windspeed MPH, UV index text is highlighted
id=temperature
id=humidity
id=windSpeed
id=uvIndex;
*5-Day Forecast */