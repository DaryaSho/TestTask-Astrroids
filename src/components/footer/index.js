import React from "react";
import moment from 'moment-timezone';

function Footer(props) {

    return (
        <div>{moment().format('YYYY')}</div>
    ) 
}

export default Footer