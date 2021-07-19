import React from "react";

import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { makeGetAsteroidsProps } from './selectors';
import PropTypes from 'prop-types';
import NotFoundPage from '../NotFoundPage';
import Details from '../../components/details';

function DetailsPage(props) {
    const { asteroids } = props
    let { id } = useParams();
    const asteroid = asteroids.find(ast=>ast.id === id);
    return (
    <div>
        {asteroid ? <Details asteroid={asteroid} /> :
        <NotFoundPage />}
    </div>
    ) 
}

const mapStateToProps = makeGetAsteroidsProps;

DetailsPage.propTypes = {
    asteroids: PropTypes.array,
};

export default connect(mapStateToProps)(DetailsPage);