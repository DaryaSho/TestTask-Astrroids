import { createAction } from 'redux-actions';
import moment from 'moment-timezone';
import { getAsteroids } from '../../services/asterroids';
import { SET_ASTEROIDS } from '../types';
const setAsteroids = createAction(SET_ASTEROIDS);

export const loadAsteroids = () => async(dispatch, getState) => {
    const startDate = moment().format('YYYY-MM-DD');
    const endDate = moment(startDate, "YYYY-MM-DD").add(7, 'days').format('YYYY-MM-DD');
    const astrroids = await getAsteroids(startDate, endDate);
    dispatch(setAsteroids(astrroids));
};
