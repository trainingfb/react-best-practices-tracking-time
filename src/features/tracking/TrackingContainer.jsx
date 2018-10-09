import * as React from 'react'
import TrackingView from './TrackingView'
import TrackingList from './TrackingList'

export default class TrackingContainer extends React.Component {
	render() {
		return (
			<div>
				<TrackingView />
				<TrackingList />
			</div>
		)
	}
}
