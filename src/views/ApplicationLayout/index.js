import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/footer';

const ApplicationLayout = (props) => {
    const { children } = props;
    return (
        <div id="home">
            
            {children}
            <Footer />

            
        </div>
    );
};

ApplicationLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
};

export default ApplicationLayout;
