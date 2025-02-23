const url = "https://weather.tsukumijima.net/api/forecast/city/350030";

function getWeather(){
    fetch(url)
        .then(response =>  response.json())
        .then(data => {
            console.log(data);
            document.getElementById("locate").textContent = data.title
            document.getElementById("today_weather").textContent = data.forecasts[0].telop;
            console.log(data.forecasts[0].image.url);
            document.getElementById("weather_svg").src = data.forecasts[0].image.url;
        })
}

setInterval(getWeather, 1800)