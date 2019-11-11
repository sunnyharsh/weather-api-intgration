import { WEATHER_DATA, WEATHER_DATA_SUCCESS } from "../action.types";

export const weatherData = () => ({
    type: WEATHER_DATA,
    
});
export const weatherDataSuccess = values => ({
    type: WEATHER_DATA_SUCCESS,
    values
});
