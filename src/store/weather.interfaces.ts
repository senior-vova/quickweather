export type StateType = {
    weather: IWeather | null
    error: string | null,
}

export type ActionType = {
    type: string,
    weather: IWeather,
    msg: string | null,
}

export interface IWeather {
    city: string,
    degree: number,
    name: string,
    country: string,
}