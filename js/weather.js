const API_KEY = "75b5318f868279d44c54ff949ae4f550"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in",lat,long);
    const urls = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(urls).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.ceil(data.main.temp)}℃`;  
    });
}

function onGeoError(){
    alert("Can't Find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
onGeoOk({})