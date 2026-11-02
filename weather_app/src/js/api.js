export async function getCityCoordinates(city) {
    const url=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
    
    const response = await fetch(url);

    if(!response.ok){
        throw new Error ("Unable to fetch city details");
    }

    const data = await response.json();

    if(!data.results || data.results.length === 0){
        throw new Error ("City Not Found");
    }

    return data.results[0];
}

export async function getWeather(latitude, longitude) {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch weather data");
    }

    const data = await response.json();

    return data;
}