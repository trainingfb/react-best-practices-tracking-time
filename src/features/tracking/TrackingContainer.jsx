import * as React from 'react'
import TrackingView from './TrackingView'
import withTracking from './connectors/tracking.connector'

class TrackingContainer extends React.Component {
	componentDidMount() {
		this.props.getTasks()
	}

	render() {
		return (
			<div>
				<TrackingView
					active={this.props.active}
					tasks={this.props.tasks}
					onTaskSave={newItem => this.props.saveTask(newItem)}
					onTaskDelete={item => this.props.removeTask(item)}
					onTaskSetActive={item => this.props.setActive(item)}
					onTaskReset={() => this.props.reset()}
				/>
			</div>
		)
	}
}

export default withTracking(TrackingContainer)
