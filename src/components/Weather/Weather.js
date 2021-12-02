import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Weather.css'

const Weather = ({getLatAndLng}) => {
    const [getWeather, setWeather] = useState({})

    const apiKey = 'f90a0fbfa46435da18777c85dd7bd085';

    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${getLatAndLng.latitude}&lon=${getLatAndLng.longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`)
        .then(res => {
            setWeather(res);
           
        })
    }, [getLatAndLng.latitude, getLatAndLng.longitude])


    const getThreeDays = getWeather.data.daily.slice(0, 3);

    return (
        <div>
            <div className="text-center">
                <p>{new Date().toDateString()}</p>
                <h3>{getWeather.data.timezone}</h3>
                <div className="d-flex justify-content-center align-items-center">
                    <img id="image" src={`https://openweathermap.org/img/wn/${getWeather?.data.current.weather[0].icon}@2x.png`} alt="" />
                    <h4>{getWeather?.data.current.temp} &deg;C</h4>
                </div>
            </div>
            <div>
                <h6>Next 3 days forecast</h6>
                {
                    getThreeDays.map((data, index) => {
                        return(
                            <div>
                                <span>{ new Date(new Date().getTime() + (index + 1) * 24 * 60 * 60 * 1000).toDateString()}</span>
                                <img id="image" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                                <span>{data.temp.day} &deg;C </span>
                                <span>{data.weather[0].description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Weather;



