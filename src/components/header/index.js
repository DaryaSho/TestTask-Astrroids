import React from "react";
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSelectedDate } from '../../store/actions/startupData';
import { FORWARD, BACK } from '../../shiftСonstants';
import { makeGetHeaderProps } from './selectors';
import { Container, ArrowBack, ArrowForward } from './styled';
import { DATE_FORMAT } from '../../dateConstans';
function Header(props) {
    const { selectedDate, onLoadSelectedDate } = props; 
    return (
        <Container>
            <ArrowBack src="arrow.svg" alt="" onClick = {() => onLoadSelectedDate(BACK)} />
            ***** {moment(selectedDate, DATE_FORMAT).format('LL')} ***** 
            <ArrowForward src="arrow.svg" alt="" onClick = {() => onLoadSelectedDate(FORWARD)}/>
        </Container>
    ) 
}

const mapStateToProps = makeGetHeaderProps;

Header.propTypes = {
    selectedDate: PropTypes.string,
    onLoadSelectedDate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    onLoadSelectedDate: (shift) => dispatch(loadSelectedDate(shift)),
     });
export default connect(mapStateToProps, mapDispatchToProps)(Header)