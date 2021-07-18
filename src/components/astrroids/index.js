import React from "react";
import Details from '../details';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeGetAsteroidsProps } from './selectors';
import PropTypes from 'prop-types';

function Asteroids(props) {
    
    const { asteroids, filter } = props;

    return asteroids && asteroids.map(astrroid => 
    <Link to={`/Details/${astrroid.id}`} key={astrroid.id}>{astrroid.name}
    {filter}
        <Details astrroid={astrroid}/>
     </Link>)  
    }

const mapStateToProps = makeGetAsteroidsProps;

Asteroids.propTypes = {
    asteroids: PropTypes.array,
    filter: PropTypes.string,
};

export default connect(mapStateToProps)(Asteroids);