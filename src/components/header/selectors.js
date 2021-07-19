import { createStructuredSelector } from 'reselect';
import { getSelectedDate } from '../../store/selectors/startupData';


export function makeGetHeaderProps() {

  return createStructuredSelector({
    selectedDate: getSelectedDate,
  });
}
