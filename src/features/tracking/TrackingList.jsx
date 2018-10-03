import React from 'react'
import Tracking from './Tracking'

const TrackingList = () => (
	<Tracking>
		{({ tasks }) => (
			<ul>
				{tasks.map(task => (
					<li key={task.id}>{task.text}</li>
				))}
			</ul>
		)}
	</Tracking>
)

export default TrackingList
