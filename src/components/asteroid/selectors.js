import { createStructuredSelector } from 'reselect';
import { getSortAsteroidsBySelectedDate } from '../../store/selectors/startupData';

export function makeGetAsteroidsProps() {

  return createStructuredSelector({
    asteroids: getSortAsteroidsBySelectedDate,
  });
}
