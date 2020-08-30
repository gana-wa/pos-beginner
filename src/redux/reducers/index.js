import { combineReducers } from 'redux';
import menuReducer from './menu';
import historyReducer from './history';

const indexReducer = combineReducers({
    menu: menuReducer,
    history: historyReducer,
});

export default indexReducer;