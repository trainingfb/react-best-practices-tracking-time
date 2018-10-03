import React from 'react'
import WithTracking from './WithTracking'

const TrackingList = ({ tasks }) => (
	<div>
		<ul>
			{tasks.map(task => (
				<li key={task.id}>{task.text}</li>
			))}
		</ul>
	</div>
)

export default WithTracking(TrackingList)
