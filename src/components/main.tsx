import React, {useEffect, useState, FC} from "react";
import {MainAppHOC} from "../hocs/MainAppHOC";
import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SetWeatherDays} from "../store/weather.reducer";
import {Home} from './Home';
import {SBC} from "./SearchByCityComponent";

const Main: FC = () => {
    const dispatch = useDispatch();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                dispatch(SetWeatherDays(pos.coords.latitude, pos.coords.longitude));
                setInitialized(true);
            }, (err) => {
                setInitialized(true);
            });
        } else {
            setInitialized(true);
            console.log("Your browser is not supported Geolocation");
        }
        //eslint-disable-next-line
    }, []);

    return !initialized
        ? <div className={"container d-flex justify-content-center align-items-center h-100"}><h1>Loading...</h1></div>
        : <>
            <Switch>
                <Route exact path={'/'} render={() => <Home/>}/>
                <Route exact path={'/city'} render={() => <SBC/>}/>
                <Route path={'/'} render={() => <Redirect to={'/'}/>}/>
            </Switch>
        </>
};

export default MainAppHOC(Main);