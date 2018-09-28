// import { taskConfig } from "../../services/tracking.appSettings";

import { taskConfig } from "../../services";

export const options = {
  responsive: true,
};

export const convertTimeStampToDate = ms => {
  const date = new Date(ms);
  return `${date.getDate()}/${date.getMonth()}`
}

/**
 * Receive an array of task and generate an object for PieChart chartJS
 * @param data
 * @returns {any[]}
 */
export const getPieData = tasks => {
  const extract = {}
  for (let i = 0; i < tasks.length; i++) {
    let label = tasks[i].type || 'not assigned';
    let value = extract[label] ? extract[label].value += 1 : 1;
    extract[label] = { label, value, ...taskConfig[label] }
  }
  return Object.values(extract)
};


/**
 * Receive an array of task and generate an object for LineChart chartJS
 * @param tasks
 * @returns {{labels: Array, datasets: *[]}}
 */
export const getLineData = tasks => {

  const labels = [];
  const series = {
    label: "My Second dataset",
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: []
  };

  for (let i = 0; i < tasks.length; i++) {
    labels.push(convertTimeStampToDate(tasks[i].creationDate))
    series.data.push(tasks[i].duration)
  }

  return {
    labels,
    datasets: [series ]
  }
};

/*

export const getLineDataDefaults = () => ({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
});

export const getPieDataDefaults = () => [
  {
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
  }
];*/
