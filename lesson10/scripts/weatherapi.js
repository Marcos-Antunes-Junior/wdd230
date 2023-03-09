const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = document.lastModified;
year.textContent = `${new Date().getFullYear()}`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const cityName = "Fairbanks";
const apiID = "a321a24880d341ec1049227f82a34540";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiID}&units=imperial`;

async function apiFetch(){
  try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch(); //Call apiFetch function for the first time.

//Call apiFetch function each 8 seconds.
const callFuncEachMin = setInterval(apiFetch, 8000);


function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
    
}