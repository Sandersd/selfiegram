import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

//Create store with combined reducers and thunk middleware for dispatch
export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
