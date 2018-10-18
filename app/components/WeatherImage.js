import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherImage(props) {
  //for local server
  const image = `app/images/weather-icons/${props.iconId}.svg`;
  //for firebase uncomment
  //const image = `images/${props.iconId}.svg`;
  return (  
      <img src={`/${image}`}></img>
  )
}

WeatherImage.propTypes = {
  iconId: PropTypes.string.isRequired,
}

