import React from "react";

import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { makeGetAsteroidsProps } from './selectors';
import PropTypes from 'prop-types';

function DetailsPage(props) {
     const { asteroids } = props
    let { id } = useParams();
    const asteroid = asteroids.filter(ast=>ast.id = id);

    return (
        <div>
            <h3>ID: {id} {asteroid.name}</h3>
      </div>
    ) 
}

const mapStateToProps = makeGetAsteroidsProps;

DetailsPage.propTypes = {
    asteroids: PropTypes.array,
};

export default connect(mapStateToProps)(DetailsPage);