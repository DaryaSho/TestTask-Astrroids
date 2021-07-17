import React from "react";
import PropTypes from 'prop-types';

function Details(props) {

    const { astrroid } = props;

    return (<div>id - {astrroid.id} name - {astrroid.name}  orbiting_body - {astrroid.orbiting_body}</div>);
    
}

Details.propTypes = {
    astrroid: PropTypes.object
  };
export default Details