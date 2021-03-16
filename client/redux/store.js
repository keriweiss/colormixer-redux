import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const middlewares = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middlewares);

export default store;
