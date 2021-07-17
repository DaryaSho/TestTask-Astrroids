import React from "react";
import { getAsteroids } from '../../services/asterroids';
import Asteroids from '../../components/astrroids'


function HomePage(props) {
    // const astrroids = getAsteroids();
    // console.log(astrroids);
    return (
        <div>           
            <Asteroids />           
        </div>
    ) 
}

export default HomePage