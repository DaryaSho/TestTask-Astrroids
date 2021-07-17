import React from "react";
import moment from 'moment-timezone';

function Header(props) {

    return (
        <div>{moment().format('LL')}   *****   {moment().format('YYYY-MM-DD')}</div>
    ) 
}

export default Header