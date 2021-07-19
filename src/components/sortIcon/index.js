/* eslint-disable default-case */
import React from "react";
import { connect } from 'react-redux';
import { makeGetAsteroidsProps } from './selectors';
import { ArrowUp, ArrowDown } from './styled';
import PropTypes from 'prop-types';
import { 
    BY_NAME,
    BY_NAME_REV,
    BY_SIZE,
    BY_SIZE_REV,
    BY_ID,
    BY_ID_REV
    } from '../../filterConstans';
  

function SortIcon(props) {
    
    const {  filter } = props;

     switch(filter){

        case BY_NAME:
            return <>N<ArrowUp/></>;
          case BY_NAME_REV:
            return <>N<ArrowDown/></>;
          case BY_ID:
            return <>I<ArrowUp/></>;
          case BY_ID_REV:
            return <>I<ArrowDown/></>;
          case BY_SIZE:
            return <>M<ArrowUp/></>;
          case BY_SIZE_REV:
            return <>M<ArrowDown/></>;
        }
    }

const mapStateToProps = makeGetAsteroidsProps;

SortIcon.propTypes = {
    filter: PropTypes.string,
};

export default connect(mapStateToProps)(SortIcon);