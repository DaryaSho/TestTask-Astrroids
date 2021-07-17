import { createActions } from 'redux-actions';
import moment from 'moment-timezone';
import { getAsteroids } from '../../services/asterroids';
import { getAsteroidsBySelectedDate, getSelectedDateDate } from '../selectors/startupData'; 
import { SET_ASTEROIDS, SET_SELECTED_DATE } from '../types';
import { FORWARD } from '../../shiftСonstants';

export const { setAsteroids, setSelectedDate } = createActions(SET_ASTEROIDS, SET_SELECTED_DATE);

export const loadAsteroids = () => async(dispatch, getState) => {
    const state = getState();
    const selectedDate = state.startupData?.selectedDate;
    const startDate = moment(selectedDate, 'YYYY-MM-DD').subtract(3, "days").format('YYYY-MM-DD');
    const endDate = moment(startDate, "YYYY-MM-DD").add(7, 'days').format('YYYY-MM-DD');
    const astrroids = await getAsteroids(startDate, endDate);
    dispatch(setAsteroids(astrroids));
};

export const loadSelectedDate = (shift) => async(dispatch, getState) => {
    const state = getState();
    let selectedDate = getSelectedDateDate(state);
    selectedDate = shift === FORWARD ? 
        moment(selectedDate, 'YYYY-MM-DD').subtract(1, "days").format('YYYY-MM-DD'):
        moment(selectedDate, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD');

    dispatch(setSelectedDate(selectedDate));
    const asteroids = getAsteroidsBySelectedDate(state);
    if(asteroids.length === 0 ) new Promise((resolve) => {
        setTimeout(() => {
          loadAsteroids();
        }, 1);
      });
};
