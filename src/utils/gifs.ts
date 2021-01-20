import morningRain from '../assets/MorningRain.gif';
import nightRain from '../assets/NightRain.gif';
import Rain from '../assets/Rain1.gif';
import Fog from '../assets/Fog.gif';
import Fog1 from '../assets/Fog1.gif';
import Fog2 from '../assets/Fog2.gif';
import Snow from '../assets/Snow.gif';
import Snow2 from '../assets/Snow2.gif';
import Snow3 from '../assets/Snow3.gif';
import Cloudy from '../assets/Cloudy.gif';
import ClearSky from '../assets/ClearSky.gif';

const fog: Array<any> = [Fog, Fog1, Fog2];
const mist: Array<any> = [Fog, Fog1, Fog2];
const rain: Array<any> = [Rain, morningRain, nightRain];
const snow: Array<any> = [Snow, Snow2, Snow3];
const clouds: Array<any> = [Cloudy];
const clear: Array<any> = [ClearSky];

export const GIFs = {
    fog,
    rain,
    snow,
    mist,
    clouds,
    clear
};
