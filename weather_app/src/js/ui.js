export function displayContent(location, weather){
    const current = weather.current;
    const daily = weather.daily;

// City and Country Name
    document.querySelector(".city-name").textContent =
    `${location.name}, ${location.country}`;

// Temperature
    document.querySelector("#temperature").textContent = 
    `${current.temperature_2m}°`;

// Feels Like
    document.querySelector("#feels-like").textContent =
    `Feels like ${current.apparent_temperature}°`;

// Humidity
    document.querySelector("#humidity").textContent = 
    `${current.relative_humidity_2m}%`;

//Wind Speed
    document.querySelector("#wind-speed").textContent = 
    `${current.wind_speed_10m}km/h`;

// High Temp
    document.querySelector("#high-temp").textContent = 
    `High: ${Math.round(daily.temperature_2m_max[0])}°`;

// Low Temp
    document.querySelector("#low-temp").textContent = 
    `Low: ${Math.round(daily.temperature_2m_min[0])}°`;

// UV Index
    document.querySelector("#uv-index").textContent = 
    `${daily.uv_index_max[0]}`;

// Rain Chance
    document.querySelector("#rain-chance").textContent = 
    `${daily.precipitation_probability_max[0]}%`;

// Sunrise Time
    const sunriseTime = new Date(daily.sunrise[0]);
    document.querySelector("#sunrise").textContent = 
    sunriseTime.toLocaleTimeString("en-IN",{
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    
// Sunset Time
    const sunsetTime = new Date(daily.sunset[0]);
    document.querySelector("#sunset").textContent = 
        sunsetTime.toLocaleTimeString("en-IN",{
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

// Day Length
    const difference = sunsetTime - sunriseTime;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    document.querySelector("#day-length").textContent =
        `${hours}h ${minutes}m`;
}