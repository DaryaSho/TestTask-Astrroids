import { createSelector } from 'reselect';

export const getStartupData = (state) => state.startupData;

export const getSelectedDate = (state) => state.startupData?.selectedDate;
export const getAsteroids = (state) => state.startupData?.asteroids;

export const getAsteroidsBySelectedDate = createSelector(
    [getAsteroids,getSelectedDate],
    (asteroids, selectedDate) => {
      return asteroids[selectedDate] || [];
    },
  );


