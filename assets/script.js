const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const date1El = document.getElementById('date1');
const date2El = document.getElementById('date2');
const date3El = document.getElementById('date3');
const date4El = document.getElementById('date4');
const date5El = document.getElementById('date5');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('timezone');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);

setInterval(() => {
    const time = new Date();
    const day = time.getDay();
    date1El.innerHTML = days[day]
}, 1000);

setInterval(() => {
    const time = new Date();
    const day = time.getDay();
    date2El.innerHTML = days[day+1]
}, 1000);

setInterval(() => {
    const time = new Date();
    const day = time.getDay();
    date3El.innerHTML = days[day+2]
}, 1000);

setInterval(() => {
    const time = new Date();
    const day = time.getDay();
    date4El.innerHTML = days[day+3]
}, 1000);

setInterval(() => {
    const time = new Date();
    const day = time.getDay();
    date5El.innerHTML = days[day+4]
}, 1000);


function getWeather() {
    const newName = document.getElementById("cityInput")
    const cityName = document.getElementById("cityName")
    cityName.innerHTML = "Weather in " + newName.value

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&units=imperial&appid=8be59e4e2ee7d03ba73b4748346efb83`)
        .then((res) => res.json())
        .then(data => {

            var name = data.city['name'];
            var temp = data.list[0]['main']['temp'];
            var humidity = data.list[0]['main']['humidity'];
            var speed = data.list[0]['wind']['speed'];

            // document.querySelector(".city").innerHTML = newName;
            document.querySelector(".temp").innerHTML = "Temp: " + temp + "°C";
            document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " MPH";

            var name = data.city['name'];
            var temp = data.list[8]['main']['temp'];
            var humidity = data.list[8]['main']['humidity'];
            var speed = data.list[8]['wind']['speed'];
            console.log(name, temp, humidity, speed)

            // document.querySelector(".city").innerHTML = newName;
            document.querySelector(".temp1").innerHTML = "Temp: " + temp + "°C";
            document.querySelector(".humidity1").innerHTML = "Humidity: " + humidity + "%";
            document.querySelector(".wind1").innerHTML = "Wind speed: " + speed + " MPH";

            var name = data.city['name'];
            var temp = data.list[16]['main']['temp'];
            var humidity = data.list[16]['main']['humidity'];
            var speed = data.list[16]['wind']['speed'];
            console.log(name, temp, humidity, speed)

            // document.querySelector(".city").innerHTML = newName;
            document.querySelector(".temp2").innerHTML = "Temp: " + temp + "°C";
            document.querySelector(".humidity2").innerHTML = "Humidity: " + humidity + "%";
            document.querySelector(".wind2").innerHTML = "Wind speed: " + speed + " MPH";

            var name = data.city['name'];
            var temp = data.list[24]['main']['temp'];
            var humidity = data.list[24]['main']['humidity'];
            var speed = data.list[24]['wind']['speed'];
            console.log(name, temp, humidity, speed)

            // document.querySelector(".city").innerHTML = newName;
            document.querySelector(".temp3").innerHTML = "Temp: " + temp + "°C";
            document.querySelector(".humidity3").innerHTML = "Humidity: " + humidity + "%";
            document.querySelector(".wind3").innerHTML = "Wind speed: " + speed + " MPH";

            var name = data.city['name'];
            var temp = data.list[32]['main']['temp'];
            var humidity = data.list[32]['main']['humidity'];
            var speed = data.list[32]['wind']['speed'];
            console.log(name, temp, humidity, speed)

            // document.querySelector(".city").innerHTML = newName;
            document.querySelector(".temp4").innerHTML = "Temp: " + temp + "°C";
            document.querySelector(".humidity4").innerHTML = "Humidity: " + humidity + "%";
            document.querySelector(".wind4").innerHTML = "Wind speed: " + speed + " MPH";

            var name = data.city['name'];
            var temp = data.list[39]['main']['temp'];
            var humidity = data.list[39]['main']['humidity'];
            var speed = data.list[39]['wind']['speed'];
            console.log(name, temp, humidity, speed)

            // document.querySelector(".city").innerHTML = newName;
            document.querySelector(".temp5").innerHTML = "Temp: " + temp + "°C";
            document.querySelector(".humidity5").innerHTML = "Humidity: " + humidity + "%";
            document.querySelector(".wind5").innerHTML = "Wind speed: " + speed + " MPH";
        })
}
document.querySelector(".search-btn").addEventListener("click", function () {
    getWeather();
});