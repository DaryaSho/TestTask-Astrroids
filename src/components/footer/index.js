import React from "react";
import moment from 'moment-timezone';
import {Container} from './styled';

function Footer(props) {

    return (
        <Container>{moment().format('YYYY')}</Container>
    ) 
}

export default Footer