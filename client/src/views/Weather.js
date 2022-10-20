import React from "react";
import { useState } from 'react';

const Weather = () => {
    const [forecastData, setForecastData] = useState(null)
    const [location, setLocation] = useState(null)

    const handleChange = event => setLocation(event.target.value)

    const fetchForecastData = () => {
        if (location) {
            setForecastData('Loading...')

            fetch('/weather?address=' + location)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        setForecastData(data.error)
                    } else {
                        setForecastData(data.forecast)
                    }
                })
        }
    }

    return (
        <>
            <input
                type='text'
                placeholder='Location'
                onChange={handleChange}
            />

            <button
                onClick={fetchForecastData}
            >
                Search
            </button>

            <p>{!forecastData ? '' : forecastData}</p>
        </>
    )
};

export default Weather;