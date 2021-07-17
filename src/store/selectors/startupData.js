import { createSelector } from 'reselect';

export const getStartupData = (state) => state.startupData;

export const getDate = (state) => state.startupData?.date;
export const getAsteroids = (state) => state.startupData?.asteroids;

export const getAsteroidsByDate = createSelector(
    [getAsteroids,getDate],
    (getAsteroids, getDate) => {
      debugger;
      return getAsteroids[getDate] || [];
    },
  );

