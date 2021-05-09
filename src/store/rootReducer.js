import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer'
import loading from './loading'
import error from './error'

// combine reducers
const rootReducer = combineReducers({peopleReducer,loading, error});

export default rootReducer


