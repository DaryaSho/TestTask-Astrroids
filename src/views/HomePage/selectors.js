import { createStructuredSelector } from 'reselect';
import { getAsteroidsBySelectedDate } from '../../store/selectors/startupData';

export function makeGetHomePageProps() {

  return createStructuredSelector({
    asteroids: getAsteroidsBySelectedDate,
  });
}
