import { addTask, deleteTask, editTask, getAllTasks } from '../services'
import {
	editTask as editTaskAction,
	addTask as addTaskAction,
	deleteTask as deleteTaskAction,
	setError,
	setTasks
} from './tracking.action-creators'

export function getTasks() {
	return async dispatch => {
		const { data, error } = await getAllTasks()
		if (error) {
			return dispatch(setError(error))
		}

		dispatch(setTasks(data))
	}
}

export function saveTask(task) {
	return async dispatch => {
		if (task.id) {
			const { data, error } = await editTask(task)
			if (error) {
				return dispatch(setError(error))
			}

			return dispatch(editTaskAction(data))
		}

		const { data, error } = await addTask(task)
		if (error) {
			return dispatch(setError(error))
		}

		return dispatch(addTaskAction(data))
	}
}

export function removeTask(task) {
	return async dispatch => {
		const { error } = await deleteTask(task.id)
		if (error) {
			return dispatch(setError(error))
		}

		return dispatch(deleteTaskAction(task))
	}
}
