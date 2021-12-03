import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


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