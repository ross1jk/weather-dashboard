// Shorthand for $( document ).ready()

 console.log("ready!");

   // Initial array of cities
   var cities = [];

   $("#searchBtn").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var city = $("#citySearch").val().trim();

    // The city from the textbox is then added to array
    cities.push(city);
    console.log(cities); 
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