import { createSelector } from 'reselect';

export const getStartupData = (state) => state.startupData;

export const getSelectedDateDate = (state) => state.startupData?.selectedDate;
export const getAsteroids = (state) => state.startupData?.asteroids;

export const getAsteroidsBySelectedDate = createSelector(
    [getAsteroids,getSelectedDateDate],
    (getAsteroids, getDate) => {
      return getAsteroids[getDate] || [];
    },
  );

