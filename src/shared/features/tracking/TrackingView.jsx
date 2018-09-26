import React from 'react';
import PropTypes from 'prop-types';

import Activities from './components/activities/Activities';
import AddActivity from './components/form-activity/AddActivity';
import { Card } from "../../components/card";
import { Charts } from "./components/charts/Charts";

// Tracking View
const TrackingView = props =>(<div className="row">
  <div className="col-sm-7">
    <Card>
      <AddActivity {...props} />
    </Card>
    <hr/>
    <Card title="Activities">
      <Activities {...props} />
    </Card>
  </div>
  <div className="col-sm-5">
    <Charts data={props.list} />
  </div>
</div>);

export default TrackingView;

TrackingView.propTypes = {
  active: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.number
  }),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.number
    }).isRequired
  ),
  onSaveActivity: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onItemClick: PropTypes.func,
  onResetActive: PropTypes.func
};
