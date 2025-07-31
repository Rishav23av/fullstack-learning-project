const apiKey = 'c764742307ef4f6174daa905608a0129'; 


const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const cityElement = document.getElementById('city');
const tempElement = document.getElementById('temp');
const iconElement = document.getElementById('icon');


async function getWeatherByCity(cityName) {
    try {
        
        cityElement.textContent = 'Loading...';
        tempElement.textContent = '';
        iconElement.hidden = true;

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=en`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        updateWeatherDisplay(data);
    } catch (error) {
        cityElement.textContent = 'City not found';
        tempElement.textContent = 'Please try again';
        iconElement.hidden = true;
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherDisplay(data) {
    const cityName = data.name;
    const country = data.sys.country;
    const temp = data.main.temp.toFixed(1);
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    cityElement.textContent = `${cityName}, ${country}`;
    tempElement.textContent = `${temp}°C`;
    iconElement.src = iconUrl;
    iconElement.alt = data.weather[0].description;
    iconElement.hidden = false;
}


function handleSearch() {
    const cityName = searchInput.value.trim();
    if (cityName === '') {
        alert('Please enter a city name');
        return;
    }
    getWeatherByCity(cityName);
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSearch();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
    }
});


window.addEventListener('load', () => {
    getWeatherByCity('Delhi');
});