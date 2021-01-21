import {buildWeatherInfo, switchCtoF, switchFtoC} from "./DOMBuilding"

let sliderValue = document.querySelector('.check').checked;
const slider = document.querySelector('.switch');

console.log(sliderValue);
 
export default async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ad5fe16a4535b8d1f2a2656afa96c6eb&units=metric`, 
    {mode:"cors"});
    response.json().then((response) => {
        console.log(response);
        const weather = {
            city: response.name,
            country: response.sys.country,
            temp: Math.round(response.main.temp),
            feels_like: Math.round(response.main.feels_like),
            main: response.weather[0].main
        }
        slider.addEventListener('click', () => {
            sliderValue = document.querySelector('.check').checked;
            if(sliderValue) {
                switchCtoF(weather.temp, weather.feels_like, weather.main);
            } else {
                switchFtoC(weather.temp, weather.feels_like, weather.main);
            }
        }) 
        console.log(weather);
        buildWeatherInfo(weather.temp, weather.feels_like, weather.main, weather.city, weather.country);
    })
}