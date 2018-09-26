import React from 'react';
import PropTypes from 'prop-types';
import { typeConfig } from "../features/tracking/components/charts/chart-utils";

export const Icon = props => {
  // console.log(props.type, typeConfig[props.type].icon)
  const icon = typeConfig[props.type] ? typeConfig[props.type].icon : null;
  return (
    <i className={icon} />
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(['study', 'development', 'meeting', ''])
}
