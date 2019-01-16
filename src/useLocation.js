import { useState, useEffect } from 'react';

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),  //console.log(position),//callback for success
            err => setErrorMessage(err.message) //callback for err //console.log(err)
        );
    }, []);

    return [lat, errorMessage];
}

export default useLocation;