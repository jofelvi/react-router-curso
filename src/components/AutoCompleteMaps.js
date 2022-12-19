import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const AutoCompleteMaps = () =>{
    let key = process.env.KEYMAPS
    return (  <div>
        <GooglePlacesAutocomplete
            apiKey="AIzaSyC-JXntAdtzMFdzxRdCZ0uchkXcOPS5WO4"
            placeholder="Type a place"
            query={{key: {}}}
        />
    </div>
)};

export default AutoCompleteMaps;
