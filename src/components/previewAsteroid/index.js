import React from "react";
import PropTypes from 'prop-types';
import { Text, Container } from './styled';

function PreviewAsteroid(props) {

    const { astrroid } = props;
    const estimated_diameter_kil = astrroid.estimated_diameter.kilometers;
    return (
    <Container>
        <Text>id - {astrroid.id}</Text>
        <Text>estimated diameter - min {estimated_diameter_kil.estimated_diameter_min.toFixed(2)}km - max {estimated_diameter_kil.estimated_diameter_max.toFixed(2)}km</Text>
    </Container>
    );
    
}

PreviewAsteroid.propTypes = {
    astrroid: PropTypes.object
  };
export default PreviewAsteroid