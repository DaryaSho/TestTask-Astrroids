import React from "react";
import PreviewAsteroid from '../previewAsteroid';
import { connect } from 'react-redux';
import { makeGetAsteroidsProps } from './selectors';
import PropTypes from 'prop-types';
import { Link } from './styled';
import SortIcon from '../sortIcon';

function Asteroids(props) {
    
    const { asteroids, filter } = props;

    return asteroids && asteroids.map(astrroid =>
    
    <Link to={`/Details/${astrroid.id}`} key={astrroid.id}>
        Name: {astrroid.name} <SortIcon />
        <PreviewAsteroid astrroid={astrroid}/>
     </Link>)  
    }

const mapStateToProps = makeGetAsteroidsProps;

Asteroids.propTypes = {
    asteroids: PropTypes.array,
    filter: PropTypes.string,
};

export default connect(mapStateToProps)(Asteroids);