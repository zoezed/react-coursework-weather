import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherForm from './WeatherForm';

export default function Main (props) {
    return(
        <div className='home-container gradientB'>
            <h1>Enter City </h1>
            <WeatherForm 
            directon='column'  
            loc=''           
            onSubmitLocation={ (city) => {
                props.history.push({
                    pathname: 'forecast',
                    search: '?city=' + city
                }) 
                {loc:city}                             
            }}    
            />
        </div>

    )
}
