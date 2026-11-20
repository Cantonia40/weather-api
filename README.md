# Weather API 🌤️
**Live Demo:** [https://weather-api-u65i.onrender.com/weather?city=Lagos](https://weather-api-u65i.onrender.com/weather?city=Lagos)
A simple RESTful API built with Node.js and Express that fetches real-time weather data for any city using the OpenWeatherMap API.

## Features
- Fetches current temperature, description, and humidity.
- Robust error handling (400 for missing city, 404 for city not found).
- Uses `dotenv` to securely manage API keys.

## Tech Stack
- Node.js
- Express
- OpenWeatherMap API

## How to run locally
1. Clone the repo.
2. Run `npm install`.
3. Create a `.env` file and add `WEATHER_API_KEY=your_openweathermap_key`.
4. Run `node index.js`.
5. Test it: `curl "http://localhost:3000/weather?city=Lagos"`
