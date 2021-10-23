import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import './style.scss';
import './main.js';

const timeElement = document.getElementById('time')
const amPm = document.getElementById('am-pm')
const dateElement = document.getElementById('date')
const currentWeatherItems = document.getElementById('current-weather-items')
const timeZone = document.getElementById('time-zone')
const country = document.getElementById('country')
const weatherForecast = document.getElementById('weather-forecast')
const currentTemp = document.getElementById('current-temp')
const months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const updateTime = () =>{
  const time = new Date()
  const currentTime = time.toLocaleTimeString([], {timeStyle: 'short'}).split(' ')
  const day = time.getDay()
  const date = time.getDate()
  const month = time.getMonth()
  timeElement.innerText = currentTime[0].toString();
  amPm.innerText = currentTime[1].toString();
  dateElement.innerText = `${days[day]}, ${date} ${months[month]}`;
}
setInterval(updateTime, 5000)


function getWeatherData(){
   navigator.geolocation.getCurrentPosition(async(success) => {
    let {latitude, longitude } = success.coords;
    let data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&lang=pt&appid=${api_key}`)
    data = await data.json() 
    console.log(data)
  })
}
getWeatherData()
