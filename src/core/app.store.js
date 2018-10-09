import { createStore, combineReducers, applyMiddleware } from 'redux'

import TrackingReducer from '../features/tracking/sources/tracking.reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	tracking: TrackingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
