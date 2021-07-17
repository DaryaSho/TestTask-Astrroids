import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './store/reducers';
import { loadAsteroids } from './store/actions';

const applicationState = async () => {
  const middleware = applyMiddleware(thunk, promise);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(middleware),
  );

  await Promise.all([
    store.dispatch(loadAsteroids())
  ]);
  
  return store;
};

export default applicationState;
