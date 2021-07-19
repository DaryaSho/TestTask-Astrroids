import React from "react";
import PropTypes from 'prop-types';
import { Text, Container } from './styled';

function PreviewAsteroid(props) {

    const { asteroid } = props;
    const estimated_diameter_kil = asteroid.estimated_diameter.kilometers;
    return (
    <Container>
        <Text>id - {asteroid.id}</Text>
        <Text>absolute magnitude - {asteroid.absolute_magnitude_h.toFixed(2)}h</Text>
    </Container>
    );
    
}

PreviewAsteroid.propTypes = {
    asteroid: PropTypes.object
  };
export default PreviewAsteroid