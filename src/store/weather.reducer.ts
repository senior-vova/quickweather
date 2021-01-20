import {StateType, ActionType,  IWeather} from "./weather.interfaces";
import {API} from "../api/weather.api";
import {Dispatch} from "redux";

const initialState: StateType = {
    weather: null,
    error: null,
};
type InitialState = typeof initialState;

export const weatherReducer = (state: StateType = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case "SET_WEATHER":
            return {
                ...state,
                weather: {...action.weather}
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
        dispatch(actions.setError("Server error"));
    }
};
