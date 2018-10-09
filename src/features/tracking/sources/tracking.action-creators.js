import { SET_ACTIVE, EDIT_TASK, ADD_TASK, DELETE_TASK, RESET, SET_ERROR, SET_TASKS } from './tracking.action-types'

export function setTasks(tasks) {
	return {
		type: SET_TASKS,
		tasks
	}
}

export function setActive(task) {
	return {
		type: SET_ACTIVE,
		task
	}
}

export function editTask(task) {
	return {
		type: EDIT_TASK,
		task
	}
}

export function addTask(task) {
	return {
		type: ADD_TASK,
		task
	}
}

export function deleteTask(task) {
	return {
		type: DELETE_TASK,
		task
	}
}

export function reset() {
	return {
		type: RESET
	}
}

export function setError(error) {
	return {
		type: SET_ERROR,
		error
	}
}
