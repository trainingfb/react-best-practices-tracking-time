import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import TrackingReducer from '../features/tracking/sources/tracking.reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
	tracking: TrackingReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
