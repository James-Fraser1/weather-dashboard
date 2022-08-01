const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('timezone');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);

let weather = {
APIKey: "8be59e4e2ee7d03ba73b4748346efb83",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.APIKey)

        .then((res) => res.json())
        .then((data) => this.displayWeather(data));
     
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon } = data.weather.id;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,temp,humidity,speed)
        document.querySelector(".city").innerHTML = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "MPH";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar"))
    }
};

document.querySelector(".search-btn").addEventListener("click", function() {
        weather.search();
    });

weather.fetchWeather();