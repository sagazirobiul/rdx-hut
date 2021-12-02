import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';


const containerStyle = {
    width: '100%',
    height: '300px'
  };

const Map = ({getLatAndLng, setLatAndLng}) => {
    
    const apiKey = "AIzaSyDwPGTZrj3esquWdoSULIrJdnX50ANKkkw"

    const center = {
        lat: getLatAndLng.latitude,
        lng:  getLatAndLng.longitude
      };

    const showPosition = (position) => {
        setLatAndLng(position.coords);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.")
    }

    // useEffect(() => {
    //     axios(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${getLatAndLng.latitude},${getLatAndLng.longitude}&key=${apiKey}`)
    //     .then(res => {
    //         // console.log(res.data);
    //     })
    // }, [getLatAndLng.latitude, getLatAndLng.longitude])

    return (
        <div className="mt-3">
            <LoadScript
                googleMapsApiKey={apiKey}
                >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;