import {AppStateType} from "./store";

export const getWeatherSelector = (state: AppStateType) => state.weather;
export const getWeather = (state: AppStateType) => state.weather.weather;
export const getError = (state: AppStateType) => state.weather.error;