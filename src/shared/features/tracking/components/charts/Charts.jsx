import React from 'react';
import { getLineData, getPieData, options } from "./chart-utils";
const PieChart = require("react-chartjs").Pie;
const LineChart = require("react-chartjs").Line;

export const Charts = props => {

  const lineData = getLineData(props.data);
  const pieData = getPieData(props.data);

  return (
    <div className="text-center">
      <h4>Task Duration</h4>
      <LineChart height="200" data={lineData} options={options}/>
      <hr/>
      <h4>Task Amount</h4>
      <PieChart height="300" data={pieData} options={options}/>
    </div>
  )
}