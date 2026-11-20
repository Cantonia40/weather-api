require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;
app.use(cors());

// PASTE YOUR API KEY HERE BETWEEN THE QUOTES
const API_KEY = process.env.WEATHER_API_KEY; 

app.get('/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'Please provide a city name. Example: /weather?city=Lagos' });
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ error: 'City not found' });
      }
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Weather API is running on http://localhost:${PORT}`);
});
