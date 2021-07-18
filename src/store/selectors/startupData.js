/* eslint-disable default-case */
import { createSelector } from 'reselect';
import { 
  BY_NAME,
  BY_NAME_REV,
  BY_SIZE,
  BY_SIZE_REV,
  BY_ID,
  BY_ID_REV
  } from '../../filterConstans';


export const getStartupData = (state) => state.startupData;

export const getSelectedDate = (state) => state.startupData?.selectedDate;
export const getAsteroids = (state) => state.startupData?.asteroids;
export const getFilter = (state) => state.startupData?.filter;

export const getAsteroidsBySelectedDate = createSelector(
    [getAsteroids,getSelectedDate],
    (asteroids, selectedDate) => {
      return asteroids[selectedDate] || [];
    },
  );

  export const getSortAsteroidsBySelectedDate = createSelector(
    [getFilter, getAsteroidsBySelectedDate],
    (filter, asteroids) => {
      switch (filter) {
        case BY_NAME:
          return asteroids.sort(sortByKey('name'));
        case BY_NAME_REV:
          return asteroids.sort(sortByKey('name')).reverse();
        case BY_ID:
          return asteroids.sort(sortByKey('id'));
        case BY_ID_REV:
          return asteroids.sort(sortByKey('id')).reverse();
        case BY_SIZE:
          return asteroids.sort(sortByKey('estimated_diameter.kilometers.estimated_diameter_max'));
        case BY_SIZE_REV:
          return asteroids.sort(sortByKey('estimated_diameter.kilometers.estimated_diameter_min')).reverse();
      }
    }
  );

  export const sortByKey = (key) => function (a, b) {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  };

