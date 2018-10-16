import * as React from 'react'
import TrackingView from './TrackingView'
import { addTask, deleteTask, editTask, getAllTasks } from './services'

export const INITIAL_ACTIVE_STATE = {
	text: '',
	creationDate: null,
	duration: 0,
	type: ''
};

export default class TrackingContainer extends React.Component {
	constructor() {
		super();
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
	saveTask = async (item) => {
		if (item.id) {
			this.editTask(item)
		} else {
			this.addTask(item)
		}
	};

	/**
	 * Add new Task
	 * @param task
	 * @returns {Promise<void>}
	 */
	addTask = async (task) => {
		const { error, data } = await addTask(task);
    this.setState(state => {
      return {
        tasks: [...this.state.tasks, data],
        active: INITIAL_ACTIVE_STATE,
        error
      }
    })
	};

	/**
	 * Edit task
	 * @param task
	 * @returns {Promise<void>}
	 */
	editTask = async (task) => {
		const { error, data } = await editTask(task);
		this.setState(state => {
		  return {
		    tasks: state.tasks.map(el => {
          return el.id === data.id ? data : el
        }),
        active: data,
        error
		  }
    })
	};

	/**
	 * Delete task
	 * @param task
	 * @returns {Promise<void>}
	 */
	deleteTask = async (task) => {
		const { error } = await deleteTask(task.id);
		this.setState(state => {
		  return {
		    tasks: state.tasks.filter(el => task.id !== el.id),
        active: task.id === this.state.active.id ? INITIAL_ACTIVE_STATE : this.state.active,
        error
		  }
    })
	};

	/**
	 * Set Active Task
	 * @param item
	 */
	setActive = (item) => {
		this.setState({ active: item })
	};

	/**
	 * Reset Form
	 */
	reset = () => {
		this.setState({ active: { ...INITIAL_ACTIVE_STATE } })
	};

	render() {
		const { error } = this.state;
		return (
			<div>
				{!error ? <TrackingView
					active={this.state.active}
					tasks={this.state.tasks}
					onTaskSave={this.saveTask.bind(this)}
					onTaskDelete={this.deleteTask.bind(this)}
					onTaskSetActive={this.setActive}
					onTaskReset={this.reset.bind(this)}
				/> : 'no data'}
			</div>
		)
	}
}
