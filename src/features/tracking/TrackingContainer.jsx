import * as React from 'react'
import TrackingView from './TrackingView'
import { addTask, deleteTask, editTask, getAllTasks } from './services'

export const INITIAL_ACTIVE_STATE = {
	text: '',
	creationDate: null,
	duration: 0,
	type: ''
}

export default class TrackingContainer extends React.Component {
	constructor() {
		super()
		this.state = { active: INITIAL_ACTIVE_STATE, tasks: [], error: null }
	}

	async componentDidMount() {
		const { error, data } = await getAllTasks()
		this.setState({ tasks: data, error })
	}

	/**
	 * Save Task (add / edit)
	 * @param item
	 */
	saveTask(item) {
		if (item.id) {
			this.editTask(item)
		} else {
			this.addTask(item)
		}
	}

	/**
	 * Add new Task
	 * @param task
	 * @returns {Promise<void>}
	 */
	async addTask(task) {
		const { error, data } = await addTask(task)
		const tasks = [...this.state.tasks, data]
		this.setState({ tasks, active: INITIAL_ACTIVE_STATE, error })
	}

	/**
	 * Edit task
	 * @param task
	 * @returns {Promise<void>}
	 */
	async editTask(task) {
		const { error, data } = await editTask(task)
		// update collection
		const tasks = this.state.tasks.map(el => {
			return el.id === data.id ? data : el
		})
		// update state
		this.setState({ tasks, active: data, error })
	}

	/**
	 * Delete task
	 * @param task
	 * @returns {Promise<void>}
	 */
	async deleteTask(task) {
		const { error } = await deleteTask(task.id)
		// remove element from collection
		const tasks = this.state.tasks.filter(el => task.id !== el.id)
		// check if the deleted element was selected
		const active = task.id === this.state.active.id ? INITIAL_ACTIVE_STATE : this.state.active
		// update state
		this.setState({ tasks, active, error })
	}

	/**
	 * Set Active Task
	 * @param item
	 */
	setActive(item) {
		this.setState({ active: item })
	}

	/**
	 * Reset Form
	 */
	reset() {
		this.setState({ active: { ...INITIAL_ACTIVE_STATE } })
	}

	render() {
		return (
			<div>
				<TrackingView
					active={this.state.active}
					tasks={this.state.tasks}
					onTaskSave={newItem => this.saveTask(newItem)}
					onTaskDelete={item => this.deleteTask(item)}
					onTaskSetActive={item => this.setActive(item)}
					onTaskReset={() => this.reset()}
				/>
			</div>
		)
	}
}
