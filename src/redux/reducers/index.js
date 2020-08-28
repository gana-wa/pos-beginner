import { combineReducers } from 'redux';
import menuReducer from './menu';

const indexReducer = combineReducers({
    menu: menuReducer,
});

export default indexReducer;