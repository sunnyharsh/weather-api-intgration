import { takeLatest, all } from "redux-saga/effects";
import { WEATHER_DATA } from "../action.types";
import { onWeather } from "./weather.saga";
function* sagas() {
    yield all([takeLatest(WEATHER_DATA, onWeather)]);
}

export default sagas;
