import axios from 'axios';
// import api_key from './API_KEY';

const api_key = "94983fb11c548d0a5c3229b04de38637";
const Root_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${api_key}` ;
export const Fetch_Weather = "Fetch the Weather Please";
export function fetchWeather(city){
    const url = `${Root_URL}&q=${city},us`
    const request = axios.get(url);

    console.log("request: ", request);
    return{
        type: Fetch_Weather,
        payload: request
    }
}