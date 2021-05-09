import { createStore } from 'redux';
import rootReducer from './rootReducer'

// preloadedState will be passed in by the plugin
export const store = createStore(rootReducer);