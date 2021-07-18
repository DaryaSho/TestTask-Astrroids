import React from "react";
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeGetHeaderProps } from './selectors';
import { loadSelectedDate} from '../../store/actions/startupData';
import { FORWARD, BACK } from '../../shiftСonstants';

function Header(props) {
    const { selectedDateDate, onLoadSelectedDate } = props; 
    debugger;
    return (
        <div>
            <button onClick = {() => onLoadSelectedDate(BACK)}>back</button>
            {moment(selectedDateDate, 'YYYY-MM-DD').format('LL')}   *****   {moment().format('YYYY-MM-DD')}
            <button onClick = {() => onLoadSelectedDate(FORWARD)}>forward</button>
            
        </div>
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