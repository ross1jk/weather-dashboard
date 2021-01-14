$(function() {

 // Initial array of cities
var cities = [];
var currentDate = moment().format('l'); 

 function displayCityInfo(){
 var city= $(this).attr("data-name"); 
 var queryURL = "http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial&appid=101220419d85ffb610459f1145df78ff";
 var queryURL5Day = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=101220419d85ffb610459f1145df78ff";
 

 $.ajax({
 url: queryURL,
 method: "GET"
 }).then(function(response) {
  //Current Day
  let currentWeather = "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png"; 
   $("#icon").attr('src', currentWeather); 
   $("#selectedCity").text(response.list[0].name + " (" + currentDate +")");
   $("#temperature").text("Temperature: " + response.list[0].main.temp + " Fahrenheit"); 
   $("#humidity").text("Humidity: " + response.list[0].main.humidity + " %"); 
   $("#windSpeed").text("Wind Speed: " + response.list[0].wind.speed + " MPH"); 
  // $("#uvIndex").text("UV Index: " + response.list)
  
});
//5 day
$.ajax({
  url: queryURL5Day, 
  method: "GET"
}).then(function(response){
//day 1 
$("#day1").text(moment(currentDate).add('1', 'day').format('l')); 
$("#icon1").attr("src", "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png");
$("#temp1").text("Temperature: "+ response.list[0].main.temp + " Fahrenheit");
$("#humidity1").text("Humidity: " + response.list[0].main.humidity + " %"); 
//day 2
$("#day2").text(moment(currentDate).add('2', 'day').format('l')); 
$("#icon2").attr("src", "http://openweathermap.org/img/wn/" + response.list[7].weather[0].icon + "@2x.png");
$("#temp2").text("Temperature: "+ response.list[7].main.temp + " Fahrenheit");
$("#humidity2").text("Humidity: " + response.list[7].main.humidity + " %"); 
//day 3
$("#day3").text(moment(currentDate).add('3', 'day').format('l')); 
$("#icon3").attr("src", "http://openweathermap.org/img/wn/" + response.list[15].weather[0].icon + "@2x.png");
$("#temp3").text("Temperature: "+ response.list[15].main.temp + " Fahrenheit");
$("#humidity3").text("Humidity: " + response.list[15].main.humidity + " %"); 
//day 4
$("#day4").text(moment(currentDate).add('4', 'day').format('l')); 
$("#icon4").attr("src", "http://openweathermap.org/img/wn/" + response.list[23].weather[0].icon + "@2x.png");
$("#temp4").text("Temperature: "+ response.list[23].main.temp + " Fahrenheit");
$("#humidity4").text("Humidity: " + response.list[23].main.humidity + " %"); 
//day 5
$("#day5").text(moment(currentDate).add('5', 'day').format('l')); 
$("#icon5").attr("src", "http://openweathermap.org/img/wn/" + response.list[31].weather[0].icon + "@2x.png");
$("#temp5").text("Temperature: "+ response.list[31].main.temp + " Fahrenheit");
$("#humidity5").text("Humidity: " + response.list[31].main.humidity + " %"); 
});
 }


//Looping through the array of cities 
function renderButtons(){
for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.addClass("city btn btn-light");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    // Adding the button to the buttons-view div
    $("#pastCities").append(a);
  } 
}

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
   //why isnt this stopping it
    event.stopPropagation();
    // This line grabs the input from the textbox
    var city = $("#citySearch").val().trim();
    // The city from the textbox is then added to array
    cities.push(city);
    localStorage.setItem("cities", cities); 
    renderButtons(); 
   });
 
   
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