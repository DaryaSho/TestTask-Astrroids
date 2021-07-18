import { createActions } from 'redux-actions';
import moment from 'moment-timezone';
import { getAsteroids } from '../../services/asterroids';
import { getSelectedDate, getAsteroids as getLoadedAsteroids } from '../selectors/startupData'; 
import { SET_ASTEROIDS, SET_SELECTED_DATE } from '../types';
import { FORWARD } from '../../shiftСonstants';

export const { setAsteroids, setSelectedDate } = createActions(SET_ASTEROIDS, SET_SELECTED_DATE);

export const loadAsteroids = () => async(dispatch, getState) => {
    const state = getState();
    const selectedDate = state.startupData?.selectedDate;
    const startDate = moment(selectedDate, 'YYYY-MM-DD').subtract(3, "days").format('YYYY-MM-DD');
    const endDate = moment(startDate, "YYYY-MM-DD").add(7, 'days').format('YYYY-MM-DD');
    const asteroids = await getAsteroids(startDate, endDate);
    dispatch(setAsteroids(asteroids));
};

export const loadSelectedDate = (shift) => async(dispatch, getState) => {
    const state = getState();
    let selectedDate = getSelectedDate(state);
    selectedDate = getDate(selectedDate, shift)
    dispatch(setSelectedDate(selectedDate));

    const potentiallyNextSelectedDate = getDate(selectedDate, shift)

    const asteroids = getLoadedAsteroids(state);

    if(!asteroids[potentiallyNextSelectedDate] || asteroids[potentiallyNextSelectedDate].length === 0 ) {
      dispatch(loadAsteroids());
    }
  }

export const getDate = (date, shift) => {
  return  shift === FORWARD ? 
    moment(date, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD'):
    moment(date, 'YYYY-MM-DD').subtract(1, "days").format('YYYY-MM-DD');
}