import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import applicationState from './applicationState';
import Root from './root';

const rootElement = document.getElementById('root');

function renderWithStore(store) {
  render(<Root store={store} />, rootElement);
}

applicationState().then((store) => {
  try {
    renderWithStore(store);
  } catch (error) {

    console.log(error);
  }
});

reportWebVitals();
