import { handleActions } from 'redux-actions';
import moment from 'moment-timezone';
import {SET_ASTEROIDS, SET_DATE} from '../types';

export default handleActions(
  {
    [SET_ASTEROIDS]: (state, action) => ({ ...state, asteroids: action.payload }),
    [SET_DATE]: (state, action) => ({ ...state, date: action.payload }),
  },
  { language: 'en-US', date:  moment().format('YYYY-MM-DD'), asteroids: {}},
);
