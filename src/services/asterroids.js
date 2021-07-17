import axios from 'axios';

export const getAsteroids = (startDate, endDate) => 
axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`)
    .then(res => {
        const astrroids = res.data.near_earth_objects 
        return astrroids;
})

