import React, {FC, useEffect, useState} from "react";
import {Carousel, Image, Nav} from "react-bootstrap";
import "./home.sass";
import {useSelector} from "react-redux";
import {getErrorDays, getWeatherDays} from "../store/weather.selectors";
import {GIFs} from "../utils/gifs";
import {NavLink} from "react-router-dom";

export const Home: FC<{}> = () => {
    const weatherDays = useSelector(getWeatherDays);
    const errorDays = useSelector(getErrorDays);
    const [index, setIndex] = useState<number>(0);
    const [todayGIF, setTodayGif] = useState<string>("");
    const [tomorrowGIF, setTomorrowGif] = useState<string>("");
    const [ATDGIF, setATDGif] = useState<string>("");
    useEffect(() => {
        if (weatherDays) {
            if (weatherDays.today) {
                setTodayGif(SetBG(weatherDays.today.name));
            }
            if (weatherDays.tomorrow) {
                setTomorrowGif(SetBG(weatherDays.today.name));
            }
            if (weatherDays.atd) {
                setATDGif(SetBG(weatherDays.atd.name));
            }
            setIndex(0);
        }
        //eslint-disable-next-line
    }, [weatherDays]);
    const SetBG = (name: string) => {
        const nameLC = name.toLowerCase();
        //@ts-ignore
        const index = parseInt((Math.random() * (GIFs[nameLC].length - 1)).toFixed(0));
        //@ts-ignore
        return GIFs[nameLC][index];
    };
    return <>
        {weatherDays
            ? <Carousel activeIndex={index} className={'h-100'} onSelect={(i: number) => {
                setIndex(i);
            }} controls={!!weatherDays} indicators={!!weatherDays} touch={true}>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 h-100"
                        src={todayGIF}
                        draggable={false}
                        alt="image"
                    />
                    <Carousel.Caption className={'p-0'}>
                        <div
                            className={'container content d-flex flex-column justify-content-center align-items-center'}>
                            <h1 className={"text-primary"}>Quick Weather</h1>
                            <Nav className={'mt-2'}>
                                <Nav.Item>
                                    <NavLink to={'/city'}>Search By City</NavLink>
                                </Nav.Item>
                            </Nav>
                            {weatherDays
                                ? <div
                                    className={"city d-flex flex-column justify-content-center align-items-center mt-3"}>
                                    <h1 className={"text-primary"}>{weatherDays.today.city}</h1>
                                    <h2 className={"text-primary"}>{weatherDays.today.name}</h2>
                                    <h2 className={"text-primary"}>{weatherDays.today.degree}&deg;C
                                        / {((weatherDays.today.degree * 9 / 5) + 32).toFixed(0)}&deg;F</h2>
                                    <h2 className={"text-primary mt-3"}>Today</h2>
                                </div>
                                : errorDays
                                    ? <h2 className={"text-danger mt-3"}>{errorDays}</h2>
                                    : <h2 className={"text-danger mt-3"}>Enter city to find out the weather</h2>
                            }
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 h-100"
                        src={tomorrowGIF}
                        draggable={false}
                        alt="image"
                    />
                    <Carousel.Caption className={'p-0'}>
                        <div
                            className={'container content d-flex flex-column justify-content-center align-items-center'}>
                            <h1 className={"text-primary"}>Quick Weather</h1>
                            <Nav className={'mt-2'}>
                                <Nav.Item>
                                    <NavLink to={'/city'}>Search By City</NavLink>
                                </Nav.Item>
                            </Nav>
                            {weatherDays
                                ? <div
                                    className={"city d-flex flex-column justify-content-center align-items-center mt-3"}>
                                    <h1 className={"text-primary"}>{weatherDays.tomorrow.city}</h1>
                                    <h2 className={"text-primary"}>{weatherDays.tomorrow.name}</h2>
                                    <h2 className={"text-primary"}>{weatherDays.tomorrow.degree}&deg;C
                                        / {((weatherDays.tomorrow.degree * 9 / 5) + 32).toFixed(0)}&deg;F</h2>
                                    <h2 className={"text-primary mt-3"}>Tomorrow</h2>
                                </div>
                                : errorDays
                                    ? <h2 className={"text-danger mt-3"}>{errorDays}</h2>
                                    : <h2 className={"text-danger mt-3"}>Enter city to find out the weather</h2>
                            }
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 h-100"
                        src={ATDGIF}
                        draggable={false}
                        alt="image"
                    />
                    <Carousel.Caption className={'p-0'}>
                        <div
                            className={'container content d-flex flex-column justify-content-center align-items-center'}>
                            <h1 className={"text-primary"}>Quick Weather</h1>
                            <Nav className={'mt-2'}>
                                <Nav.Item>
                                    <NavLink to={'/city'}>Search By City</NavLink>
                                </Nav.Item>
                            </Nav>
                            {weatherDays
                                ? <div
                                    className={"city d-flex flex-column justify-content-center align-items-center mt-3"}>
                                    <h1 className={"text-primary"}>{weatherDays.atd.city}</h1>
                                    <h2 className={"text-primary"}>{weatherDays.atd.name}</h2>
                                    <h2 className={"text-primary"}>{weatherDays.atd.degree}&deg;C
                                        / {((weatherDays.atd.degree * 9 / 5) + 32).toFixed(0)}&deg;F</h2>
                                    <h2 className={"text-primary mt-3"}>Day After Tomorrow</h2>
                                </div>
                                : errorDays
                                    ? <h2 className={"text-danger mt-3"}>{errorDays}</h2>
                                    : <h2 className={"text-danger mt-3"}>Enter city to find out the weather</h2>
                            }
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            : <p>Empty </p>
        }
    </>
};