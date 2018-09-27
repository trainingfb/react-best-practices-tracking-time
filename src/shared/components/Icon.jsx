import React from 'react';
import PropTypes from 'prop-types';
import { taskConfig } from "../../features/tracking/services/tracking.config";

export const Icon = props => {
  const icon = taskConfig[props.type] ? taskConfig[props.type].icon : null;
  return (
    <i className={icon} />
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(['study', 'development', 'meeting', ''])
}
