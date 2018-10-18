import React from 'react';
import DayItem from './DayItem';
import { convertTemp } from '../utils/helpers';
import WeatherImage from './WeatherImage';


class Detailed extends React.Component {
    render() {
        console.log("detailed props");
        console.log(this.props);
        const { city, weather, main } = this.props.location.state;
        return(
            <div className='description-container'>             
                <DayItem pathSuffix='../' day={this.props.location.state} />
                <h1>{city}</h1>
                <p>{weather[0].description}</p>
                <p>Min temp: {convertTemp(main.temp_min)} degrees</p>
                <p>Max temp: {convertTemp(main.temp_max)} degrees</p>
                <p>Humidity: {main.humidity}</p>
            </div>
        )
    }
}

export default Detailed;