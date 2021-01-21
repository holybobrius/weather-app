const mainP = document.querySelector('#mainP');
const feels_likeP = document.querySelector('#feels_like');
const locationP = document.querySelector('#locationP');
const slider = document.querySelector('#slider-container');
const icon = document.querySelector('i');


const buildWeatherInfo = (temperature, feels_like, main, city, country) => {
    locationP.innerHTML = `${city}, ${country}`;
    mainP.innerHTML = `${temperature}°C, ${main}`;
    feels_likeP.innerHTML = `Feels like: ${feels_like}°C`;
    slider.style.display = "flex";
    switch(main) {
        case "Snow": 
            icon.classList.add("fas", "fa-snowflake");
            break;
        case "Clouds": 
            icon.classList.add("fas", "fa-cloud");
            break;
        case "Clear": 
            icon.classList.add("fas", "fa-sun");
            break;
        case "Rain":
            icon.classList.add("fas", "fa-cloud-showers-heavy");
            break;
        case "Fog":
        case "Mist":
            icon.classList.add("fas", "fa-smog");
            break; 

    }
}

const switchCtoF = (temp, feels_like, main) => {
    temp = Math.round((temp * 9/5) + 32);
    feels_like = Math.round((feels_like * 9/5) + 32);
    mainP.innerHTML = `${temp}°F, ${main}`;
    feels_likeP.innerHTML = `Feels like: ${feels_like}°F`;
}

const switchFtoC = (temp, feels_like, main) => {
    mainP.innerHTML = `${temp}°C, ${main}`;
    feels_likeP.innerHTML = `Feels like: ${feels_like}°C`;
}

export {buildWeatherInfo, switchCtoF, switchFtoC}