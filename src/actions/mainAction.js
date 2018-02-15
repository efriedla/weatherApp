import api_key from './API_KEY';

const Root_URL = `http://samples.openweathermap.org/data/2.5/forecast?&appid=${api_key}` ;
export const Fetch_weather = "Fetch the Weather Please";

export function fetchWeather(city){
    const url = `${Root_URL}&q=${city},us`
    return{
        type: Fetch_Weather
    }
}