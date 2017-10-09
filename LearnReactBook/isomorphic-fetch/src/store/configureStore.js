import {
  createStore,
  combineReducers
}
from 'redux';
import templateReducer from '../reducers/index';
export default () => {
  const store = createStore(templateReducer);
  return store;
};
