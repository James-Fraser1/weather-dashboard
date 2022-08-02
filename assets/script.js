// const timeEl = document.getElementById('time');
// const dateEl = document.getElementById('date');
// const currentWeatherItemsEl = document.getElementById('current-weather-items');
// const timezone = document.getElementById('timezone');
// const weatherForecastEl = document.getElementById('weather-forecast');
// const currentTempEl = document.getElementById('current-temp');

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();

//     dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
// }, 1000);



// let weather = {
// APIKey: "8be59e4e2ee7d03ba73b4748346efb83",
//     fetchWeather: function (city) {
//         fetch("https://api.openweathermap.org/data/2.5/forecast?q=" 
//         + city 
//         + "&units=imperial&appid=" 
//         + this.APIKey)
//         .then((res) => res.json())
//         .then((data) => this.displayWeather(data));

//     },
//     displayWeather: function(data) {
//         const { name } = data;
//         const { temp, humidity } = data.main;
//         const { speed } = data.wind;
//         console.log(name,temp,humidity,speed)
//         document.querySelector(".city").innerHTML = name;
//         document.querySelector(".temp").innerHTML = "Temp: " + temp + "°C";
//         document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
//         document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " MPH";
//     },
//     search: function () {
//         this.fetchWeather(document.querySelector(".search-bar"))
//     }
// };

// document.querySelector(".search-btn").addEventListener("click", function() {
//         weather.search();
//     });

// weather.fetchWeather();

function getWeather() {
    const newName = document.getElementById("cityInput")
    const cityName = document.getElementById("cityName")
    cityName.innerHTML = "Weather in " + newName.value

    fetch("https://api.openweathermap.org/data/2.5/forecast?q='newName.value'&units=imperial&appid=8be59e4e2ee7d03ba73b4748346efb83")
        .then((res) => res.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Temp").innerHTML = "Temp: " + Number(data.list[i].main.temp).toFixed(1) + "°C"
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Humidity").innerHTML = "Humidity: " + Number(data.list[i].main.humidity).toFixed(1) + "%"
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Wind").innerHTML = "Wind: " + Number(data.list[i].wind.speed).toFixed(1) + "MPH"
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById("img" + (i + 1)).src = " http://openweathermap.org/img/wn" + data.list[i].weather[0].icon + ".png"
            }
        })

        .catch(err => alert("Error"))
}

function DefaultWeather() {
    document.getElementById("cityInput").defaultValue = "London";
    getWeather();
}

const d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    } else {
        return day + d.getDay();
    }
}

for (let i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = days[CheckDay(i)];
}