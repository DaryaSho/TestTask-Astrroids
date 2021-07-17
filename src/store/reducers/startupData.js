import { handleActions } from 'redux-actions';
import moment from 'moment-timezone';
import {SET_ASTEROIDS, SET_SELECTED_DATE} from '../types';

export default handleActions(
  {
    [SET_ASTEROIDS]: (state, action) => ({ ...state, asteroids: action.payload }),
    [SET_SELECTED_DATE]: (state, action) => ({ ...state, selectedDate: action.payload }),
  },
  { language: 'en-US', selectedDate:  moment().format('YYYY-MM-DD'), asteroids: {}},
);
