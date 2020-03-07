// JavaScript source code
const API_KEY = "7ccef42f1d57828dc6e36d7a39b1588b";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

function getWeather(lat, long) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=` + lat + `&lon=` + long + `&appid=` + API_KEY + `&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            const temperature = json.main.tem;
            const place = json.name;
            weather.innerText = '' + temperature + '@' + place+'';
        }); //여기까지하고 에러나서 멈춤
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(letitude, longitude);
}

function handleGeoError() {
    console.log("Cant acces geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.letitude, parseCoords.longitude);
    }

}



function init() {
    loadCoords();
}
init();