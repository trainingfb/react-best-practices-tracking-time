import * as React from 'react'
import TrackingView from './TrackingView'
import { connect } from 'react-redux'
import { saveTask, removeTask, getTasks } from './sources/tracking.effects'
import { reset, setActive } from './sources/tracking.action-creators'

class TrackingContainer extends React.Component {
	componentDidMount() {
		this.props.dispatch(getTasks())
	}

	render() {
		return (
			<div>
				<TrackingView
					active={this.props.active}
					tasks={this.props.tasks}
					onTaskSave={newItem => this.props.dispatch(saveTask(newItem))}
					onTaskDelete={item => this.props.dispatch(removeTask(item))}
					onTaskSetActive={item => this.props.dispatch(setActive(item))}
					onTaskReset={() => this.props.dispatch(reset())}
				/>
			</div>
		)
	}
}

const withTracking = connect(state => {
	return {
		...state.tracking
	}
})

export default withTracking(TrackingContainer)
