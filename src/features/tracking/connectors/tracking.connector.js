import { connect } from 'react-redux'
import { saveTask, removeTask, getTasks } from '../sources/tracking.effects'
import { reset, setActive } from '../sources/tracking.action-creators'

const withTracking = connect(
	state => state.tracking,
	{
		saveTask,
		removeTask,
		getTasks,
		reset,
		setActive
	}
)

export default withTracking
