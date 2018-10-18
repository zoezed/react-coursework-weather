import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState(() => ({city: value}))
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("city" + this.state.city);
        this.props.onSubmitLocation(this.state.city);

        this.setState(() => {
            return {
                location: ''
            }
        })
        

       
    }

    render()  {
        const {city} = this.state;
        const {direction} = this.props;
        return(
            <div>
                <form className={direction} onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Enter city and state'
                        className='form-control'
                        id='city'
                        type='text'
                        value={city}
                        autoComplete='off'
                        onChange={this.handleChange}
                    />
                    <button
                        className='button'
                        disabled={!city}
                        type="submit"
                        >
                        Get Weather
                    </button>
                </form>
            </div>
        )
    }
}

WeatherForm.propTypes = {
    direction: PropTypes.string.isRequired,
    onSubmitLocation: PropTypes.func,
}

WeatherForm.defaultProps = {
    direction: 'column'
}

export default WeatherForm;