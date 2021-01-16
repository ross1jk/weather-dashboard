# Weather Dashboard

This weather dashboard was designed to meet the following user story:

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
## Description

This weather dashboard features dynamically updated HTML and CSS. [OpenWeather API](https://openweathermap.org/api) is used to retrieve weather data cities and your Local Storage will will store any cities that you search. 

While utilising this application you will be able to:
Search for a city through the use of a form or by selecting an item from your search history, you will be presented with current and future conditions for that city and that city will be added to your the search history. 

When you view the current weather conditions for a given city you will be presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. The UV index will change color to indicate whether the conditions are favorable, moderate, or severe. 

Future weather conditions are also available for viewing. You are presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity.

Once the the weather dashboard is open you will be presented with the last searched city forecast. 


## Deployed Application

Access the deployed application at: 

https://ross1jk.github.io/weather-dashboard/


## Mock-Up

The following image shows the application’s basic functionality:



## Folder Structure

To follow industry best practices within the Secure Password Generator repository the folder structure has been updated.

**index.html** Stands on it own, outside of any folder. This html file was created by me and contains my html code. 

**README.md** Stands on it own, outside of any folder.

**images** This folder contains the mock-up for the Weather Dashboard

**scripts** This folder contains script.js. This JavaScript file was created by me and contains my jQuery Code. 

**styles** This folder contains the style.css document. This CSS file was created by me and contains my css code.



## Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
