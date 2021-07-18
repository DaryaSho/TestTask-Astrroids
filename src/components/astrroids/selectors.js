import { createStructuredSelector } from 'reselect';
import { getSortAsteroidsBySelectedDate, getFilter } from '../../store/selectors/startupData';

export function makeGetAsteroidsProps() {

  return createStructuredSelector({
    asteroids: getSortAsteroidsBySelectedDate,
    filter: getFilter,
  });
}
