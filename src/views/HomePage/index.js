import React from "react";
import Asteroids from '../../components/astrroids';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import SortContainer from '../../components/sortContainer';
import { connect } from 'react-redux';
import { makeGetHomePageProps } from './selectors';


function HomePage(props) {
    const { asteroids } = props
    return (
        <div> 
                
            {asteroids.length === 0 ? 
            
            <img src="spinner.gif" alt=""></img> :
            <>
                <Header />  
                <SortContainer />
                <Asteroids />
            </>
                
             }        
        </div>
    ) 
}


const mapStateToProps = makeGetHomePageProps;

HomePage.propTypes = {
    asteroids: PropTypes.array,
};
export default connect(mapStateToProps)(HomePage);