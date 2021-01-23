import {AppStateType} from "./store";

export const getWeather = (state: AppStateType) => state.weather.weather;
export const getWeatherDays = (state: AppStateType) => state.weather.weatherDays;
export const getError = (state: AppStateType) => state.weather.error;
export const getErrorDays = (state: AppStateType) => state.weather.errorDays;