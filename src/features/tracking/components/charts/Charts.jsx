import React from 'react'
import { getLineData, getPieData, options } from './chart-utils'
import { Line as LineChart } from 'react-chartjs'
import { Pie as PieChart } from 'react-chartjs'
import Tracking from '../../Tracking'

const Charts = props => {
	return (
		<Tracking>
			{({ tasks }) =>
				tasks.length > 0 ? (
					<div className="text-center">
						<h4>Task Duration</h4>
						<LineChart height="200" data={getLineData(tasks)} options={options} />
						<hr />
						<h4>Task Amount</h4>
						<PieChart height="200" data={getPieData(tasks)} options={options} />
					</div>
				) : (
					<div className="text-center">
						<div className="text-muted">No data to display</div>
					</div>
				)
			}
		</Tracking>
	)
}
export default Charts
