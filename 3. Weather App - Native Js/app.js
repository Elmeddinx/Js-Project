window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree = document.querySelector(
        ".temperature-degree"
    );
    let locationTimezone = document.querySelector(
        ".location-timezone"
    );
    let temperatureSection = document.querySelector(
        ".degree-section"
    );
    const temperatureSpan = document.querySelector(
        ".degree-section span"
    )

    // https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7dddf4025a8270bb4f183eda932607e1   ---- OPENWEATHERMAP API
    // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7dddf4025a8270bb4f183eda932607e1
    //https://api.openweathermap.org/data/2.5/weather?lat=39.200912599999995&lon=45.408226899999995&appid=7dddf4025a8270bb4f183eda932607e1
    // https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long} --- DARKSKY API


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const key = '7dddf4025a8270bb4f183eda932607e1';
            const KELVIN = 273;
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
            // const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            console.log(api);
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temperature = Math.floor(data.main.temp);
                    const desc =  data.weather[0].main;
                    const name =  data.name;
                    const icon =  data.weather[0].icon;
                    const iID =  data.weather[0].id;
                    

                    //Set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = desc;
                    locationTimezone.textContent = name;
                    //Formula For Celsius
                    let celsius = temperature - KELVIN;
                    // (temperature - 32) * (5 / 9)
                    //SET ICON
                    setIcons(icon, document.querySelector(".icon"));

                    //Change temperature to Celsius/Farenheit
                    temperatureSection.addEventListener('click',()=>{
                        if(temperatureSpan.textContent === 'F'){
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = Math.floor(celsius);
                        }else{
                            temperatureSpan.textContent = "F"
                            temperatureDegree.textContent = Math.floor(data.main.temp);
                        }
                    });
                })
        });
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});