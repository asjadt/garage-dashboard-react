import React from "react";
import Autocomplete from "react-google-autocomplete";


export default function AutoComplete({ setPlaceAutoComplete, class_Name, name, id, defaultValue }) {
    const extractAddress = (place) => {
        var componentForm = {
            street_number: 'short_name',
            route: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'short_name',
            country: 'short_name',
            postal_code: 'short_name'
        };
        const value = {
            full_address: place?.formatted_address,
            street_number: '',
            route: '',
            locality: '',
            administrative_area_level_1: '',
            country: '',
            postal_code: '',
            coordinates:{
                lat:place?.geometry?.location?.lat(),
                lng:place?.geometry?.location.lng(),
            }
        }
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];
                value[addressType] = val;
            }
        }
        return value;
    }


    return (
        <Autocomplete
            defaultValue={defaultValue ? defaultValue : ''}
            apiKey={process.env.REACT_APP_GOOGLE_MAP_API}
            onPlaceSelected={(place) => { setPlaceAutoComplete(extractAddress(place)) }}
            options={{
                types: ["geocode"],
            }}
            id={id}
            name={name}
            className={class_Name}
            type="text"
            placeholder=""
        />
    );
}
