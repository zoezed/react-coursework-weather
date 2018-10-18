import React from 'react';
import { getDate } from '../utils/helpers';
import WeatherImage from './WeatherImage';

function DayItem (props) {
    console.log(props);
    const date = getDate(props.day.dt);
    const wIcon = props.day.weather[0].icon;
    
    return (
        <div onClick={props.onClick} className='dayContainer'>
            <WeatherImage pathSuffix={props.pathSuffix || ''} iconId={wIcon}/>
            
            <h2>{date}</h2>
        </div>
    )

}

export default DayItem;