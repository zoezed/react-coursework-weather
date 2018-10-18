
const _baseURL = 'https://api.openweathermap.org/data/2.5/';
const _APIKEY = 'fca72b648f89131861476c9b7b975fb0';

function prepRouteParams (queryStringData) {
    return Object.keys(queryStringData)
        .map((key) => {
            return key + '=' + encodeURIComponent(queryStringData[key]);
        }).join('&')
}

function prepURL (type, queryStringData) {
    return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
    return {
        q: city,
        type: 'accurate',
        APPID: _APIKEY,
        cnt: 30
    }
}

async function getCurrentWeather (city) {
    const queryStringData = getQueryStringData(city);
    const url = prepURL('weather', queryStringData);    
    const currentWeatherData = await fetch(url)
    console.log(url);
    return currentWeatherData.json();
}

async function getForecast(city) {
    const queryStringData = getQueryStringData(city);
    const url = prepURL('forecast', queryStringData)
    console.log(url);
    const forecastData = await fetch(url)

    return forecastData.json();

}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast
}