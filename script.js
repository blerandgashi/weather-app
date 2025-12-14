let cityInputEl = document.querySelector("#city-input");
let cityName = document.querySelector("#city-name");
let temperatureEl = document.querySelector("#temp");
let weatherDescription = document.querySelector("#description");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#wind-speed");
let error = document.querySelector("#error");
let weatherInfo = document.querySelector("#weather-info");

const apiKey = '238bc99d0a21b2eab9461db3149a186b';
const searchBtn = document.querySelector("#search-btn");

async function getWeatherInfos() {
  try{

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=${apiKey}&units=metric`)
    const data = await response.json();

    console.log(data);
    cityName.textContent = data.name;  
    temperatureEl.textContent = data.main.temp + "°C";
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity + "%";
    windSpeed.textContent = data.wind.speed + " km/h";

    weatherInfo.classList.add("active");
    error.classList.remove("active");

  }catch (error){
    weatherInfo.classList.remove("active");
    error.classList.add("active");
  }
}

searchBtn.addEventListener("click", function(){
  getWeatherInfos();
  cityInputEl.value = ""
})