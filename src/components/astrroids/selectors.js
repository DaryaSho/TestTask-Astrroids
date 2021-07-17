import { createStructuredSelector } from 'reselect';
import { getAsteroidsBySelectedDate } from '../../store/selectors/startupData';

export function makeGetAsteroidsProps() {

  return createStructuredSelector({
    asteroids: getAsteroidsBySelectedDate,
  });
}
