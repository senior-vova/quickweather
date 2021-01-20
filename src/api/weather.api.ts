import axios from "axios";

const apiKey: string = `0a494230a7296285ed456b380ec63553`;

export const API = {
    GetWeatherByCity: async (city: string) => {
        try {
            return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        } catch (e) {
            return e;
        }
    },
    GetWeatherByPos: async (lat: number, lon: number) => {
        try {
            return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        } catch (e) {
            return e;
        }
    }
};