let cityName = "Carlsbad,us";
let apiID = "d87fbe266b8635b2d43f255274f9ce04";
let apiID2 = "a321a24880d341ec1049227f82a34540";
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=33.158&lon=-117.351&appid=${apiID}&units=imperial`;
const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiID2}&units=imperial`;
const weather = document.querySelector('.weather');

async function apiFetch2(){

    try {
        const response = await fetch(url1);
        if (response.ok) {
            const data1 = await response.json();
            console.log(data1);
            displayResults(data1);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    let container3 = document.createElement('div');
    container3.setAttribute('class', 'weather-forecast');
    let container4 = document.createElement('div')
    container4.setAttribute('class', 'temp-image');
    let nameDay = document.createElement('h4');
    nameDay.innerHTML = "Today";
    let currentTemp = document.createElement('p');
    const temp = weatherData.main.temp.toFixed(0)
    currentTemp.innerHTML = `<strong>${temp}°F</strong>`;
    const img1 = document.createElement('img');
    img1.setAttribute('class', 'weather-icon');
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc1 = weatherData.weather[0].description;
    img1.setAttribute('src', iconsrc1);
    img1.setAttribute('alt', desc1);
    const descElement1 = document.createElement('p');
    descElement1.innerHTML = desc1.toUpperCase();
    let humidity1 = `Humidity: ${weatherData.main.humidity}%`;
    let humidityElement1 = document.createElement('p');
    humidityElement1.innerHTML = humidity1;
    container3.append(nameDay);
    container3.append(container4);
    container4.append(currentTemp);
    container4.append(img1);
    container3.append(descElement1);
    container3.append(humidityElement1);
    weather.append(container3);  
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            
            for(let i=0;i<24;i++){
                let forecast = data.list[i]
                let dayData = forecast.dt_txt;
                    if(dayData.slice(-8) == "12:00:00" ){   
                        console.log(forecast);
                        let temp = forecast.main.temp.toFixed(0);
                        let desc = forecast.weather[0].description;
                        let iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                        let container = document.createElement('div');
                        container.setAttribute('class', 'weather-forecast');
                        function getDayOfWeek(date) {
                            const dayOfWeek = new Date(date).getDay();    
                            return isNaN(dayOfWeek) ? null : 
                              ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
                          }
                          let weekdays= getDayOfWeek(dayData);
                        console.log(weekdays);
                        let dayName = document.createElement('h4');
                        dayName.innerHTML = weekdays;
                        let img = document.createElement('img');
                        img.setAttribute('class', 'weather-icon');
                        img.setAttribute('src', iconsrc);
                        img.setAttribute('alt', desc);
                        let descElement = document.createElement('p');
                        descElement.innerHTML = desc.toUpperCase();
                        let tempData = document.createElement('p');
                        tempData.innerHTML = `<strong>${temp}°F</strong>`;
                        let humidity = forecast.main.humidity;
                        let humidityElement = document.createElement('p');
                        humidityElement.innerHTML = `Humidity: ${humidity}%`
                        let container2 = document.createElement('div');
                        container2.setAttribute('class', 'temp-image');
                        container.append(dayName);
                        container.append(container2)
                        container2.append(tempData);
                        container2.append(img);
                        container.append(descElement);
                        container.append(humidityElement);
                        weather.append(container);
                    }
            }    
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults2(weatherData1){

}

apiFetch2();
apiFetch();




