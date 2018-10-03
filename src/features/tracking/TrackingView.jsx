import React from 'react'
import PropTypes from 'prop-types'
// feature components
import { AddActivity } from './components/form-activity'
import { Activities } from './components/activities'
import { Charts } from './components/charts'
// shared
import { Card } from '../../shared/components'
import WithTracking from './WithTracking'

// Tracking View
const TrackingView = props => (
	<div className="row">
		<div className="col-sm-7">
			<Card>
				<AddActivity {...props} />
			</Card>
			<hr />
			<Card title="Activities">
				<Activities {...props} />
			</Card>
		</div>
		<div className="col-sm-5">
			<Charts data={props.tasks} />
		</div>
	</div>
)

export default WithTracking(TrackingView)

TrackingView.propTypes = {
	active: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		date: PropTypes.string,
		time: PropTypes.number
	}),
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			text: PropTypes.string,
			date: PropTypes.string,
			time: PropTypes.number
		}).isRequired
	),
	onTaskSave: PropTypes.func.isRequired,
	onTaskDelete: PropTypes.func.isRequired,
	onTaskSetActive: PropTypes.func,
	onTaskReset: PropTypes.func
}
