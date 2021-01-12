$(function() {

 // Initial array of cities
 var cities = [];
 
 //working for pulling info for one citty, gotta figure out how to filter for mulitple. 
 
 function displayCityInfo(){
 var city= $(this).attr("data-name"); 
 var queryURL = "http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial&appid=101220419d85ffb610459f1145df78ff";

 $.ajax({
 url: queryURL,
 method: "GET"
 }).then(function(response) {
   console.log(response);
   $("#selectedCity").text(response.list[0].name + " Time" + " Icon");
   $("#temperature").text("Temperature: " + response.list[0].main.temp + " Fahrenheit"); 
   $("#humidity").text("Humidity: " + response.list[0].main.humidity + " %"); 
   $("#windSpeed").text("Wind Speed: " + response.list[0].wind.speed + " MPH"); 
  // $("#uvIndex").text("UV Index: " + response.list)
});
 }; 

//Looping through the array of cities 
function renderButtons(){
for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.addClass("city");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    // Adding the button to the buttons-view div
    $("#pastCities").append(a);
  } 
}

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var city = $("#citySearch").val().trim();
    // The city from the textbox is then added to array
    cities.push(city);
    console.log(cities); 
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