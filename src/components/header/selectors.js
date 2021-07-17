import { createStructuredSelector } from 'reselect';
// import { getSelectedDateDate } from '../../store/selectors/startupData';
import { getSelectedDateDate } from '../../store/selectors/startupData';


export function makeGetHeaderProps() {

  return createStructuredSelector({
    selectedDateDate: getSelectedDateDate,
  });
}
