import { createStructuredSelector } from 'reselect';
import { getAsteroidsByDate } from '../../store/selectors/startupData';

export function makeGetAsteroidsProps() {

  return createStructuredSelector({
    asteroids: getAsteroidsByDate,
  });
}
