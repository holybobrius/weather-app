async function getWeather(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ad5fe16a4535b8d1f2a2656afa96c6eb`, 
        {mode:"cors"});
    response.json().then(function(response) {
        console.log(response);
        const weather = {
            city: response.name,
            country: response.sys.country,
            temp: response.main.temp,
            feels_like: response.main.feels_like,
            main: response.weather[0].main
        }
        console.log(weather);
    })
}

export { getWeather }