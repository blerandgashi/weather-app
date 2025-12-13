let cityInputEl = document.querySelector("#city-input");
let cityName = document.querySelector("#city-name");
let temperatureEl = document.querySelector("#temp");
let weatherDescription = document.querySelector("#description");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#wind-speed");


const apiKey = '238bc99d0a21b2eab9461db3149a186b';
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
  let cityInputElValue = cityInputEl.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputElValue}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {

      console.log(data);
      cityName.textContent = data.name;  
      temperatureEl.textContent = data.main.temp + "°C";
      weatherDescription.textContent = data.weather[0].description;
      humidity.textContent = data.main.humidity + "%";
      windSpeed.textContent = data.wind.speed + " km/h";

    })

    let weatherInfo = document.querySelector("#weather-info");
    weatherInfo.classList.add("active")
})