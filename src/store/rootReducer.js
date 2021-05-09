import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer'
import loading from './loading'

// combine reducers
const rootReducer = combineReducers({peopleReducer,loading});

export default rootReducer


