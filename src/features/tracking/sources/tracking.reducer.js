import DefaultState from './tracking.default-state'
import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_ACTIVE, RESET, SET_ERROR, SET_TASKS } from './tracking.action-types'

export default function reducer(state = DefaultState, action) {
	switch (action.type) {
		case SET_TASKS: {
			return {
				...state,
				tasks: action.tasks
			}
		}

		case ADD_TASK: {
			return {
				...state,
				tasks: [...state.tasks, action.task]
			}
		}

		case EDIT_TASK: {
			return {
				...state,
				tasks: state.tasks.map(t => (t.id === action.task.id ? action.task : t))
			}
		}

		case DELETE_TASK: {
			return {
				...state,
				tasks: state.tasks.filter(t => t.id !== action.task.id)
			}
		}

		case SET_ACTIVE: {
			return {
				...state,
				active: { ...action.task }
			}
		}

		case RESET: {
			return {
				...state,
				active: { ...DefaultState.active }
			}
		}

		case SET_ERROR: {
			return {
				...state,
				error: action.error
			}
		}

		default: {
			return state
		}
	}
}
