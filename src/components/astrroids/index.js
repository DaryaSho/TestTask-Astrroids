import React from "react";
import Details from '../details';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeGetAsteroidsProps } from './selectors';
import PropTypes from 'prop-types';

function Asteroids(props) {
    
    const { asteroids } = props
    return asteroids && asteroids.map(astrroid => 
    <Link to={`/Details/${astrroid.id}`} key={astrroid.id}>{astrroid.name}
        <Details astrroid={astrroid}/>
     </Link>)  
    }

const mapStateToProps = makeGetAsteroidsProps;

Asteroids.propTypes = {
    asteroids: PropTypes.array,
};

export default connect(mapStateToProps)(Asteroids);