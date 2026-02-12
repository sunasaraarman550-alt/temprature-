// weather.js

// Function to fetch weather data from OpenWeatherMap API
const fetchWeatherData = async (city) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// Function to display weather data
const displayWeather = (data) => {
    if (data) {
        const weatherInfo = `City: ${data.name}\nTemperature: ${data.main.temp} °C\nWeather: ${data.weather[0].description}`;
        console.log(weatherInfo);
    }
};

// Main function to run the application
const main = async () => {
    const city = 'London'; // Change to the desired city
    const weatherData = await fetchWeatherData(city);
    displayWeather(weatherData);
};

main();