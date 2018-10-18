import React from 'react';
import queryString from 'query-string';
import api from './../utils/api';
import Main from './Main';
import WeatherForm from './WeatherForm';
import { getDate } from './../utils/helpers';
import { Link } from 'react-router-dom';
import DayItem from './DayItem';
class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            weatherVar: [],
            
        }
    this.getTheWeather = this.getTheWeather.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        this.city = queryString.parse(this.props.location.search).city;
        this.getTheWeather(city);
    }

    componentWillReceiveProps (nextProps) {
        this.city = queryString.parse(nextProps.location.search).city;
        this.getTheWeather(city);
    }

    getTheWeather (city) {
        this.setState(() => ( { loading: true }))

        api.getForecast(this.city)
        .then((res) => {
            this.setState(() => ({ loading: false, weatherVar: res}))    
			 
			/*alternative
			const newWeatherOb = {}
			newWeatherOb.list = [];
			this.state.weatherVar.list.map((weathItem) => {
				if (newWeatherOb.list.length > 0) {
					const theDay = weathItem.dt_txt.substring(1,10)
                    for (let i=0; i<newWeatherOb.list.length; i++) {
                        const dd = newWeatherOb.list[i];
                        if (dd.dt_txt.substring(1,10).indexOf(theDay) === -1) {
                            newWeatherOb.list.push(weathItem)
                        }
                    }
				} else {
                    newWeatherOb.list.push(weathItem)
                }
			})*/
        
    
            const newWeatherOb = {};
            newWeatherOb.list = [];
            this.state.weatherVar.list.map((weathItem) => { 
                if (newWeatherOb.list.length > 0) {           
                    const theDay = weathItem.dt_txt.substring(1,10);        
                    let flag = true;
                    for(let i=0; i<newWeatherOb.list.length; i++) {
                        const dd = newWeatherOb.list[i];
                        
                        if(dd.dt_txt.substring(1,10) === theDay)
                            flag = false;                                    
                    }
                    if (flag === true)
                        newWeatherOb.list.push(weathItem);    
                    }
                else {
                    newWeatherOb.list.push(weathItem); 
                }
            
            })
            this.setState(() => ({ weatherVar : newWeatherOb }))
        })
    }

    handleClick(city) {
        city.city = this.city;
        console.log(this.props.history);
        this.props.history.push({
            pathname: '/detailed/' + this.city,
            state: city
        })
    }

    render() {
        console.log(this.props);
        
        return(

        this.state.loading === true 
            ? <div>loading</div>
            : <div>
                <h1 className='forecast-header'>{this.city}</h1>
                <div className='forecast-container'>                
                    {this.state.weatherVar.list.map((weathItem) => {
                        return <DayItem onClick={this.handleClick.bind(this, weathItem)} key={weathItem.dt} day={weathItem} />
                    })
                    }
                </div>                
            </div>
        )
    }
}

export default Forecast;