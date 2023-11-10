

document.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '30b09709cbe2f215f4eeeade3d3cdc9c';
    const city = 'Mumbai'; // Replace with the city of your choice
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=30b09709cbe2f215f4eeeade3d3cdc9c`;

    // Fetch data from the OpenWeatherMap API
    fetch(apiUrl)
        .then(response => response.json())
        .then(weatherData => {
            const weatherContainer = document.getElementById('weather');

            // Display weather information
            weatherContainer.innerHTML = `
                <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
                <p>Temperature: ${weatherData.main.temp}°C</p>
                <p>Weather: ${weatherData.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
