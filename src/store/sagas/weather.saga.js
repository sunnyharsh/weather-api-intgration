import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { weatherDataSuccess } from "../actions/weather.action";

export function* onWeather() {
    try {
        const response = yield axios.post("http://interview.com360degree.com/api/getWeather");
        console.log(response.data.data,"response")
        yield put(weatherDataSuccess(response.data.data[0]));
    } catch (error) {
        throw error;
    }
}
