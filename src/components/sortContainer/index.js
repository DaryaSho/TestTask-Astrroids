import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSetFilter} from '../../store/actions/startupData';
import { Container, ArrowUp, ArrowDown } from './styled';
import { 
    BY_NAME,
    BY_NAME_REV,
    BY_SIZE,
    BY_SIZE_REV,
    BY_ID,
    BY_ID_REV
    } from '../../filterConstans';

function SortContainer(props) {
    const { onLoadSetFilter } = props; 
    debugger;
    return (
        <Container>
            <div onClick = {() => onLoadSetFilter(BY_NAME)}>
                Name <ArrowUp alt=""  />
            </div>

            <div onClick = {() => onLoadSetFilter(BY_NAME_REV)}>
                Name <ArrowDown alt=""  />
            </div>

            <div onClick = {() => onLoadSetFilter(BY_ID)}>
                Id <ArrowUp alt=""  />
            </div>

            <div onClick = {() => onLoadSetFilter(BY_ID_REV)}>
                Id <ArrowDown alt=""  />
            </div>
            <div onClick = {() => onLoadSetFilter(BY_SIZE)}>
                Size <ArrowUp alt=""  />
            </div>

            <div onClick = {() => onLoadSetFilter(BY_SIZE_REV)}>
                Size<ArrowDown alt=""  />
            </div>


            
        </Container>
    ) 
}

SortContainer.propTypes = {
    onLoadSetFilter: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    onLoadSetFilter:  (key) => dispatch(loadSetFilter(key)),
     });
export default connect(null, mapDispatchToProps)(SortContainer)