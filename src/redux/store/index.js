import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const preloadedState = {};
const middlewares = [thunk];



const store = createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))


export default store;