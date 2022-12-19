import react from 'react';
import GoogleMaps from "simple-react-google-maps"

const Maps = (props) =>{
    return (
        <GoogleMaps
            apiKey={"AIzaSyC-JXntAdtzMFdzxRdCZ0uchkXcOPS5WO4"}
            style={{height: "400px", width: "100%"}}
            zoom={15}
            center={{lat: 37.4224764, lng: -122.0842499}}
            markers={{lat: 37.4224764, lng: -122.0842499}} //optional
        />
    )
}


export  default  Maps
