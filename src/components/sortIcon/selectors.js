import { createStructuredSelector } from 'reselect';
import { getFilter } from '../../store/selectors/startupData';

export function makeGetAsteroidsProps() {

  return createStructuredSelector({
    filter: getFilter,
  });
}
