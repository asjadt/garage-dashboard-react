import { useEffect, useState } from "react";

function useGeoLocation() {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {
            lat: "",
            lon: ""
        }
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lon: location.coords.longitude,
            }
        })
    }
    const onError = (error) => {
        setLocation({
            loaded: false,
            error
        })
    }
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Location not supported!",
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    }, [])
    return location;
}

export default useGeoLocation;
