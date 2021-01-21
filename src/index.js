 import getWeather from "./getWeather"

const city = document.querySelector('#input-city');
const icon = document.querySelector('i');

getWeather('Sasovo');

city.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        icon.className = "";
        getWeather(city.value)
    }
});