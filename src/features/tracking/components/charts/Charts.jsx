import React from 'react'
import { getLineData, getPieData, options } from './chart-utils'
import { Line as LineChart } from 'react-chartjs'
import { Pie as PieChart } from 'react-chartjs'

const Charts = props => {
	if (props.data.length === 0) {
		return (
			<div className="text-center">
				<p className="text-muted">No data to display</p>
			</div>
		)
	}

	// generate chart data
	const lineData = getLineData(props.data)
	const pieData = getPieData(props.data)

	return (
		<div className="text-center">
			<h4>Task Duration</h4>
			<LineChart height="200" data={lineData} options={options} />
			<hr />
			<h4>Task Amount</h4>
			<PieChart height="200" data={pieData} options={options} />
		</div>
	)
}
export default Charts
