$(function() {

//Initial array of cities (set from local storage memory)
var cityHistory = JSON.parse(localStorage.getItem("cities")) || []; 
var pageLoad = JSON.parse(localStorage.getItem("lastsearch")); 
//current date code need to find a better option 
var currentDate = moment().format('l'); 

 function displayCityInfo(){
  
 var city= $(this).attr("data-name") || pageLoad; 

 var geoCode = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=101220419d85ffb610459f1145df78ff" 

 $.ajax({
   url: geoCode,
   method: "GET"
 }).then(function(response){
   var lat = response[0].lat
   var lon = response[0].lon
   var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=101220419d85ffb610459f1145df78ff"

   $.ajax({
     url: queryURL, 
     methond: "GET"
   }).then(function(response){
    //current
    let currentWeather = "https://openweathermap.org/img/wn/" + response.current.weather[0].icon + "@2x.png"; 
    $("#icon").attr('src', currentWeather); 
    $("#selectedCity").text(city + " (" + currentDate +")");
    $("#temperature").text("Temperature: " + response.current.temp + " Fahrenheit"); 
    $("#humidity").text("Humidity: " + response.current.humidity + " %"); 
    $("#windSpeed").text("Wind Speed: " + response.current.wind_speed + " MPH"); 
    //5Day
    //day 1 
    $("#day1").text(moment(currentDate).add('1', 'day').format('l')); 
    $("#icon1").attr("src", "https://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + "@2x.png");
    $("#temp1").text("Temperature: "+ response.daily[0].temp.day + " Fahrenheit");
    $("#humidity1").text("Humidity: " + response.daily[0].humidity + " %"); 

    //day 2
    $("#day2").text(moment(currentDate).add('2', 'day').format('l')); 
    $("#icon2").attr("src", "https://openweathermap.org/img/wn/" + response.daily[1].weather[0].icon + "@2x.png");
    $("#temp2").text("Temperature: "+ response.daily[1].temp.day + " Fahrenheit");
    $("#humidity2").text("Humidity: " + response.daily[1].humidity + " %"); 

    //day 3
    $("#day3").text(moment(currentDate).add('3', 'day').format('l')); 
    $("#icon3").attr("src", "https://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon + "@2x.png");
    $("#temp3").text("Temperature: "+ response.daily[2].temp.day + " Fahrenheit");
    $("#humidity3").text("Humidity: " + response.daily[2].humidity + " %"); 

    //day4
    $("#day4").text(moment(currentDate).add('4', 'day').format('l')); 
    $("#icon4").attr("src", "https://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + "@2x.png"); 
    $("#temp4").text("Temperature: "+ response.daily[3].temp.day + " Fahrenheit");
    $("#humidity4").text("Humidity: " + response.daily[3].humidity + " %"); 

    //day 5
    $("#day5").text(moment(currentDate).add('5', 'day').format('l')); 
    $("#icon5").attr("src", "https://openweathermap.org/img/wn/" + response.daily[4].weather[0].icon + "@2x.png");
    $("#temp5").text("Temperature: "+ response.daily[4].temp.day + " Fahrenheit");
    $("#humidity5").text("Humidity: " + response.daily[4].humidity + " %"); 
  
  });
   let uvi = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon +"&appid=101220419d85ffb610459f1145df78ff"
   $.ajax({
     url: uvi, 
     method: "GET"
   }).then(function(response){
    let index = response.value; 
    $("#uv").text(index); 
    if (index  <= 3) {
        $("#uv").css("background-color", "green");
    }else if (index >= 3 && index <= 6) {
      $("#uv").css("background-color", "yellow");
     }else if (index >= 7 && index <= 8){
      $("#uv").css("background-color", "orange");
    }else if (index >= 8 && index <= 11){
       $("#uv").css("background-color", "red");
     }else{
       $("#uv").css("background-color", "purple");
  }

   });

   });
  };

//Intial appending of buttons from local storage
for (var i = 0; i < cityHistory.length; i++) {
    var a = $("<button>");
    a.addClass("city btn btn-light");
    a.attr("data-name", cityHistory[i]);
    a.text(cityHistory[i]);
    // Adding the button to the buttons-view div
    $("#pastCities").append(a);
  } 

//serach button 
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    // This line grabs the input from the textbox
    var city = $("#citySearch").val().trim();
    var cityNotFound = -1
    if  (cityHistory.length != 0) {
      var cityNotFound = JSON.parse(localStorage["cities"].indexOf(city));
    }
    if (cityNotFound == -1 ) {
    // The city from the textbox is then added to array
    cityHistory.push(city);
    localStorage.setItem("cities", JSON.stringify(cityHistory)); 
    }
    //search button value
     $("#searchBtn").attr("data-name", city); 
    //create button
    var b = $("<button>");
    b.addClass("city btn btn-light");
    b.attr("data-name", city);
    b.text(city);

    if (cityNotFound == -1) {
    $("#pastCities").append(b); 
    }

    //local storage for page load 
    localStorage.setItem("lastsearch", JSON.stringify(city)); 
   }
   );
  
$(document).ready(displayCityInfo()); 
$(document).on("dblclick", ".city", displayCityInfo);
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