//Already existing Variables that will display the info from the API
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//The URL that will store the my APIkey and the (q)
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=20e412f4d6abee8186539f166647b35a&units=imperial'

//Use Fetch() to get the data from the above URL and then convert it to JSON. Embed everything in a try block

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
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description ;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}