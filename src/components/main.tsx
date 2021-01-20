import React, {useEffect, useState, FC} from "react";
import {MainAppHOC} from "../hocs/MainAppHOC";
import {GIFs} from '../utils/gifs';
import {Image} from "react-bootstrap";
import SearchForm from "./SearchForm";
import {useDispatch, useSelector} from "react-redux";
import {SetWeather, SetWeatherByPos} from "../store/weather.reducer";
import {getError, getWeather} from "../store/weather.selectors";

const Main: FC = () => {
    const dispatch = useDispatch();
    const weather = useSelector(getWeather);
    const error = useSelector(getError);
    const [initialized, setInitialized] = useState(false);
    const [bgGIF, setBgGif] = useState("");
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                dispatch(SetWeatherByPos(pos.coords.latitude, pos.coords.longitude));
            }, (err) => {
                setInitialized(true);
            });
        } else {
            setInitialized(true);
            console.log("Your browser is not supported Geolocation");
        }
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (weather) {
            SetBG(weather.name);
            setInitialized(true);
        }
    }, [weather]);
    const SetBG = (name: string) => {
        const nameLC = name.toLowerCase();
        //@ts-ignore
        const index = parseInt((Math.random() * (GIFs[nameLC].length - 1)).toFixed(0));
        //@ts-ignore
        setBgGif(GIFs[nameLC][index]);
    };
    const SFSubmit = (formData: any) => {
        if (!formData.cityName) return null;
        dispatch(SetWeather(formData.cityName));
    };

    return !initialized
        ? <div className={"container d-flex justify-content-center align-items-center h-100"}><h1>Loading...</h1></div>
        : <>
            <div className={'background w-100 h-100 d-flex justify-content-center'}>
                {weather
                    ? <Image src={bgGIF} fluid draggable={"false"} alt={"image"}/>
                    : <div className={'loading bg-light'}/>
                }
            </div>
            <div className={'container content d-flex flex-column justify-content-center align-items-center'}>
                <h1 className={"text-primary"}>Quick Weather <i>Demo(ver 0.1)</i></h1>
                <h3 className={"text-primary"}>Find out the weather of your city quickly</h3>
                <SearchForm onSubmit={SFSubmit}/>
                {weather
                    ? <div className={"city d-flex flex-column justify-content-center align-items-center mt-3"}>
                        <h1 className={"text-primary"}>{weather.city}/{weather.country}</h1>
                        <h2 className={"text-primary"}>{weather.name}</h2>
                        <h2 className={"text-primary"}>{weather.degree}&deg;C
                            / {((weather.degree * 9 / 5) + 32).toFixed(0)}&deg;F</h2>
                    </div>
                    : error
                        ? <h2 className={"text-danger mt-3"}>{error}</h2>
                        : <h2 className={"text-danger mt-3"}>Enter city to find out the weather</h2>
                }
            </div>
        </>
};

export default MainAppHOC(Main);