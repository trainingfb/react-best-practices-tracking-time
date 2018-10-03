import React from 'react'
import PropTypes from 'prop-types'
// feature components
import { AddActivity } from './components/form-activity'
import { Activities } from './components/activities'
import { Charts } from './components/charts'
// shared
import { Card } from '../../shared/components'
import Tracking from './Tracking'

// Tracking View
const TrackingView = props => (
	<Tracking>
		{trackingData => (
			<div className="row">
				<div className="col-sm-7">
					<Card>
						<AddActivity {...trackingData} />
					</Card>
					<hr />
					<Card title="Activities">
						<Activities {...trackingData} />
					</Card>
				</div>
				<div className="col-sm-5">
					<Charts />
				</div>
			</div>
		)}
	</Tracking>
)

export default TrackingView

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
