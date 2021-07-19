import React from "react";
import PreviewAsteroid from '../previewAsteroid';
import { connect } from 'react-redux';
import { makeGetAsteroidsProps } from './selectors';
import PropTypes from 'prop-types';
import { Link } from './styled';
import SortIcon from '../sortIcon';

function Asteroids(props) {
    
    const { asteroids } = props;

    return asteroids && asteroids.map(asteroid =>
    
    <Link to={`/Details/${asteroid.id}`} key={asteroid.id}>
        Name: {asteroid.name} <SortIcon />
        <PreviewAsteroid asteroid={asteroid}/>
     </Link>)  
    }

const mapStateToProps = makeGetAsteroidsProps;

Asteroids.propTypes = {
    asteroids: PropTypes.array,
};

export default connect(mapStateToProps)(Asteroids);