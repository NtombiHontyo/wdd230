const currentWeather = document.querySelector('#tempV');
const weatherIcon = document.querySelector('#weathericon');
const captionDesc = document.querySelector('figcaption');
const currentSV = document.querySelector('#speedV');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Durban&appid=20e412f4d6abee8186539f166647b35a&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data)
        }   else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }

    }

apiFetch(); 

function displayResults(weatherdata) {
    currentWeather.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;
    currentSV.innerHTML = weatherdata.wind.speed.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description ;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}