import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import pilotsReducer from '../reducers/pilots';
import upgradesReducer from '../reducers/upgrades';
import filtersReducer from '../reducers/filters';
import pilotsFilterReducer from '../reducers/pilotsFilter';
import upgradesFilterReducer from '../reducers/upgradesFilter';
import builderReducer from '../reducers/builderReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      pilots: pilotsReducer,
      upgrades: upgradesReducer,
      filters: filtersReducer,
      pilotsFilter: pilotsFilterReducer,
      upgradesFilter: upgradesFilterReducer,
      builder: builderReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
