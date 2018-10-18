import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import WeatherForm from './WeatherForm';
import Forecast from './Forecast';
import Detailed from './Detailed';
//require.context('../images', true, /\.svg$/);

class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route render={(props) => {
                        return(
                            <div className='wheader'>
                            <div>
                                <h1 style={{marginLeft:'10px'}}>Zed Weather</h1>
                            </div>
                            <div>
                                <WeatherForm 
                                    direction='row'
                                    onSubmitLocation={ (location) => {                                        
                                        props.history.push({
                                            pathname: '/forecast',
                                            search: '?city=' + location
                                        })
                                    }}   
                                />
                            </div>    
                            </div>
                        );
                    }}
                    />
                    <Route exact path='/' component={Main} />
                    <Route path='/forecast' component={Forecast} />
                    <Route path='/detailed/:city' component={Detailed} />
                </div>
            </Router>
        )
    }
}

export default App;