import { handleActions } from 'redux-actions';
import moment from 'moment-timezone';
import {SET_ASTEROIDS, SET_SELECTED_DATE, SET_FILTER} from '../types';
import { 
  BY_ID,
  } from '../../filterConstans';

export default handleActions(
  {
    [SET_ASTEROIDS]: (state, action) => ({ ...state, asteroids: action.payload }),
    [SET_SELECTED_DATE]: (state, action) => ({ ...state, selectedDate: action.payload }),
    [SET_FILTER]: (state, action) => ({ ...state, filter: action.payload }),
  },
  { language: 'en-US', selectedDate:  moment().format('YYYY-MM-DD'), asteroids: {}, filter: BY_ID},
);
