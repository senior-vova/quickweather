import React, {FC, useEffect, useState} from "react";
import {Image, Nav} from "react-bootstrap";
import SearchForm from "./SearchForm";
import {useDispatch, useSelector} from "react-redux";
import {getError, getWeather} from "../store/weather.selectors";
import {GIFs} from "../utils/gifs";
import {SetWeather, SetWeatherByPos} from "../store/weather.reducer";
import {NavLink} from "react-router-dom";
import "./city.sass";

export const SBC: FC<{}> = () => {
    const dispatch = useDispatch();
    const weather = useSelector(getWeather);
    const error = useSelector(getError);
    const [bgGIF, setBgGif] = useState("");
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                dispatch(SetWeatherByPos(pos.coords.latitude, pos.coords.longitude));
            }, (err) => {
                setInitialized(true);
            });
        } else {
            console.log("Your browser is not supported Geolocation");
            setInitialized(true);
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
    const SFSubmit = (cityName: string) => {
        dispatch(SetWeather(cityName));
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
                <h1 className={"text-primary"}>Quick Weather</h1>
                <h3 className={"text-primary"}>Find out the weather of your city quickly</h3>
                <Nav className={'mt-2'}>
                    <Nav.Item>
                        <NavLink to={'/'}>Home</NavLink>
                    </Nav.Item>
                </Nav>
                <SearchForm submitForm={SFSubmit}/>
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