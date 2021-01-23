import {StateType, ActionType, IWeather, IWeatherDays} from "./weather.interfaces";
import {API} from "../api/weather.api";
import {Dispatch} from "redux";

const initialState: StateType = {
    weather: null,
    weatherDays: null,
    error: null,
    errorDays: null,
};
type InitialState = typeof initialState;

export const weatherReducer = (state: StateType = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case "SET_WEATHER":
            return {
                ...state,
                weather: action.weather,
            };
        case "SET_WEATHER_DAYS":
            return {
                ...state,
                weatherDays: action.weatherDays,
            };
        case "SET_ERROR":
            return {
                ...initialState,
                error: action.msg,
            };
        default:
            return {
                ...state,
            }
    }
};
export const actions = {
    setWeather: (weather: IWeather | null) => ({type: "SET_WEATHER", weather}),
    setWeatherDays: (weatherDays: IWeatherDays | null) => ({type: "SET_WEATHER_DAYS", weatherDays}),
    setError: (msg: string | null) => ({type: "SET_ERROR", msg})
};

export const SetWeather = (city: string) => async (dispatch: Dispatch<any>) => {
    const resp = await API.GetWeatherByCity(city);
    if (typeof resp !== "string" && resp.data) {
        if (resp.data.cod !== 200) {
            dispatch(actions.setError(resp.data.message));
        } else {
            const obj = {
                city: resp.data.name,
                degree: parseInt(Math.ceil(resp.data.main.temp - 273.15).toFixed(0)),
                name: resp.data.weather[0].main,
                country: resp.data.sys.country,
            };
            dispatch(actions.setWeather(obj));
        }
    } else {
        dispatch(actions.setError("City not found"));
    }
};

export const SetWeatherByPos = (lat: number, lon: number) => async (dispatch: Dispatch<any>) => {
    const resp = await API.GetWeatherByPos(lat, lon);
    if (typeof resp !== "string" && resp.data) {
        if (resp.status !== 200) {
            dispatch(actions.setError(resp.data.message));
        } else {
            const obj = {
                city: resp.data.name,
                degree: parseInt(Math.ceil(resp.data.main.temp - 273.15).toFixed(0)),
                name: resp.data.weather[0].main,
                country: resp.data.sys.country,
            };
            dispatch(actions.setWeather(obj));
        }
    } else {
        dispatch(actions.setError("Server error"));
    }
};

export const SetWeatherDays = (lat: number, lon: number) => async (dispatch: Dispatch<any>) => {
    const resp = await API.GetWeatherByPos2(lat, lon);
    if (typeof resp !== "string" && resp.data) {
        if (resp.status !== 200) {
            dispatch(actions.setError(resp.data.message));
        } else {
            const today = {
                city: resp.data.timezone.split('/')[1],
                degree: +(Math.ceil(resp.data.current.temp - 273.15).toFixed(0)),
                name: resp.data.current.weather[0].main,
            };
            const tomorrow = {
                city: resp.data.timezone.split('/')[1],
                name: resp.data.daily[0].weather[0].main,
                degree: +(Math.ceil((+((resp.data.daily[0].temp.min + resp.data.daily[0].temp.max) / 2).toFixed(2)) - 273.15).toFixed(0)),
            };
            const atd = {
                city: resp.data.timezone.split('/')[1],
                name: resp.data.daily[1].weather[0].main,
                degree: +(Math.ceil((+((resp.data.daily[1].temp.min + resp.data.daily[1].temp.max) / 2).toFixed(2)) - 273.15).toFixed(0)),
            };
            dispatch(actions.setWeatherDays({today: today, tomorrow: tomorrow, atd: atd}));
        }
    } else {
        dispatch(actions.setError("Server error"));
    }
};


