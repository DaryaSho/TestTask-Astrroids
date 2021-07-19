import React from "react";
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSelectedDate } from '../../store/actions/startupData';
import { FORWARD, BACK } from '../../shiftСonstants';
import { makeGetHeaderProps } from './selectors';
import { Container, ArrowBack, ArrowForward } from './styled';
function Header(props) {
    const { selectedDateDate, onLoadSelectedDate } = props; 
    return (
        <Container>
            <ArrowBack src="arrow.svg" alt="" onClick = {() => onLoadSelectedDate(BACK)} />
            ***** {moment(selectedDateDate, 'YYYY-MM-DD').format('LL')} ***** 
            <ArrowForward src="arrow.svg" alt="" onClick = {() => onLoadSelectedDate(FORWARD)}/>
        </Container>
    ) 
}

const mapStateToProps = makeGetHeaderProps;

Header.propTypes = {
    selectedDateDate: PropTypes.string,
    onLoadSelectedDate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    onLoadSelectedDate: (shift) => dispatch(loadSelectedDate(shift)),
     });
export default connect(mapStateToProps, mapDispatchToProps)(Header)