import "../style.css";
import {getCityCoordinates,getWeather} from './api.js';
import { displayContent } from "./ui.js";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('.search-button');

async function searchCity() {
    const city = cityInput.value.trim();
    if(!city){
        alert("Please enter city name!!")
        return;
    }

    try{
        console.log("Searching for:",city);
        const location = await getCityCoordinates(city);

        const weather = await getWeather(location.latitude,location.longitude);
        displayContent(location, weather);
    }
    catch(error){
        console.error(error.message);
        alert(error.message);
    }
}

searchBtn.addEventListener("click", searchCity);

cityInput.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        searchCity();
    }
});
