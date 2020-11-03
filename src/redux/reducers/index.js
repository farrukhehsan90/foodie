import { combineReducers } from 'redux';
import foodiesReducer from './foodies';
import menuReducer from './menu';

const rootReducer = combineReducers({
    foodies: foodiesReducer,
    menu:menuReducer
})

export default rootReducer;