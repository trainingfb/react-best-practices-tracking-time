import React from 'react'
import PropTypes from 'prop-types'
import { ActivityItem } from './ActivityItem'

const Activities = props => {
	const {
		active: { id }
	} = props;

	const deleteItem = task => {
		props.onTaskDelete(task);
	};

	const setActive = task => {
    props.onTaskSetActive(task);
	};

	return (
		<div>
			{props.tasks.length === 0 && <p>No activities to display</p>}

			{props.tasks.map(task => {
				return (
					<ActivityItem
						key={task.id}
						task={task}
						onTaskSetActive={setActive.bind(this, task)}
						onTaskDelete={deleteItem.bind(this, task)}
						selected={id === task.id}
					/>
				)
			})}
		</div>
	)
}

export default Activities

Activities.propTypes = {
	active: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    creationDate: PropTypes.number,
    duration: PropTypes.number,
    type: PropTypes.string
	}),
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      creationDate: PropTypes.number,
      duration: PropTypes.number,
      type: PropTypes.string
		})
	),
	onTaskDelete: PropTypes.func,
	onTaskSetActive: PropTypes.func
}
