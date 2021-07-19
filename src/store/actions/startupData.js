import { createActions } from 'redux-actions';
import moment from 'moment-timezone';
import { getAsteroids } from '../../services/asterroids';
import { getSelectedDate, getAsteroids as getLoadedAsteroids } from '../selectors/startupData'; 
import { SET_ASTEROIDS, SET_SELECTED_DATE, SET_FILTER } from '../types';
import { FORWARD } from '../../shiftСonstants';
import { DATE_FORMAT } from '../../dateConstans';


export const {
  setAsteroids,
  setSelectedDate, 
  setFilter
   } = createActions(
  SET_ASTEROIDS,
  SET_SELECTED_DATE,
  SET_FILTER);

export const loadAsteroids = () => async(dispatch, getState) => {
    const state = getState();
    const selectedDate = state.startupData?.selectedDate;
    const startDate = moment(selectedDate, DATE_FORMAT).subtract(3, 'days').format(DATE_FORMAT);
    const endDate = moment(startDate, DATE_FORMAT).add(7, 'days').format(DATE_FORMAT);
    const asteroids = await getAsteroids(startDate, endDate);
    dispatch(setAsteroids(asteroids));
};

export const loadSelectedDate = (shift) => async(dispatch, getState) => {
    const state = getState();
    let selectedDate = getSelectedDate(state);
    selectedDate = shiftDate(selectedDate, shift)
    dispatch(setSelectedDate(selectedDate));

    const potentiallyNextSelectedDate = shiftDate(selectedDate, shift)

    const asteroids = getLoadedAsteroids(state);

    if(!asteroids[potentiallyNextSelectedDate] || asteroids[potentiallyNextSelectedDate].length === 0 ) {
      dispatch(loadAsteroids());
    }
  }

export const shiftDate = (date, shift) => {
  return  shift === FORWARD ? 
    moment(date, DATE_FORMAT).add(1, 'days').format(DATE_FORMAT):
    moment(date, DATE_FORMAT).subtract(1, 'days').format(DATE_FORMAT);
}

export const loadSetFilter = (key) => (dispatch) => {
    dispatch(setFilter(key));
}