import React from "react";
import Asteroids from '../../components/asteroid';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import SortContainer from '../../components/sortContainer';
import { connect } from 'react-redux';
import { makeGetHomePageProps } from './selectors';
import { AsteroidsContainer, Title } from './styled';


function HomePage(props) {
    const { asteroids } = props
    return (
        <div> 
                
            {asteroids.length === 0 ? 
            
            <div>
                <img src="spinner.gif" alt="" />
                <Title>Please wait</Title></div>:
            <div>
                <Header />  
                <SortContainer />
                <AsteroidsContainer>
                    <Asteroids />
                </AsteroidsContainer>
            </div>
                
             }        
        </div>
    ) 
}


const mapStateToProps = makeGetHomePageProps;

HomePage.propTypes = {
    asteroids: PropTypes.array,
};
export default connect(mapStateToProps)(HomePage);