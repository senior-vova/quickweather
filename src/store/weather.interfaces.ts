export type StateType = {
    weather: IWeather | null,
    weatherDays: IWeatherDays | null,
    error: string | null,
    errorDays: string | null,
}

export type ActionType = {
    type: string,
    weather: IWeather | null,
    weatherDays: IWeatherDays | null,
    msg: string | null,
}

export interface IWeather {
    city: string,
    degree: number,
    name: string,
    country?: string,
}

export interface IWeatherDay {
    city: string,
    degree: number,
    name: string,
}

export interface IWeatherDays {
    today: IWeatherDay,
    tomorrow: IWeatherDay,
    atd: IWeatherDay,
}
