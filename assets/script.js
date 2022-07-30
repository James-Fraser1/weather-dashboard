var APIKey = "8be59e4e2ee7d03ba73b4748346efb83";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
