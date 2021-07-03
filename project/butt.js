let APIkey; 
let cityName; 

async function getWeather() {
    let APIkey = "6e08ca043c75b6a05db557db1e22e603";
    let cityName = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIkey}`)
    .then(response  => response.json())
    .then(data => {
        document.querySelector(".cityName").innerHTML = cityName;
        document.querySelector(".forecastTitle").innerHTML = "Forecast";
        document.querySelector(".forecast").innerHTML = data.weather[0].description;
        document.querySelector(".highTitle").innerHTML = "Today's High";
        document.querySelector(".high").innerHTML = Math.floor((data.main.temp_max - 273.15) * 9/5 + 32);
        document.querySelector(".lowTitle").innerHTML = "Today's Low";
        document.querySelector(".low").innerHTML = Math.floor((data.main.temp_min - 273.15) * 9/5 + 32);
        document.querySelector(".humidityTitle").innerHTML = "Humidity";
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".locationTitle").innerHTML = "Location";
        document.querySelector(".location").innerHTML = (`Latitude: ${data.coord.lat}, Longitude: ${data.coord.lon}`)
    });
}