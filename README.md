#Weather Dashboard

This weather dashboard was designed with to meet the following user story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
## Description

This weather dashboard features dynamically updated HTML and CSS. [OpenWeather API](https://openweathermap.org/api) is used to retrieve weather data cities and your Local Storage will will store any cities that you search. 

While utilising this application you will be able to:
Search for a city through the use of a form or by selecting an item from your search history, you will be presented with current and future conditions for that city and that city will be added to your the search history. When you view the current weather conditions for a given city you will be presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. The UV index will change color to indicate whether the conditions are favorable, moderate, or severe. 
Future weather conditions are also available for viewing. You are presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity.
Once the the weather dashboard is open you will be presented with the last searched city forecast. 

## Deployed Application

Access the deployed application at: 

https://ross1jk.github.io/weather-dashboard/



## Mock-Up

The following image shows the application’s basic functionality:


# 06 Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
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
```

The following image demonstrates the application functionality:

![weather dashboard demo](./images/06-server-side-apis-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
