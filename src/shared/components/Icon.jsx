import React from 'react';
import PropTypes from 'prop-types';
import { iconConfig } from "./icon.config";

const Icon = props => {
  const icon = iconConfig[props.type] ? iconConfig[props.type].icon : null;
  return (
    <i className={icon} />
  )
};

Icon.propTypes = {
  type: PropTypes.oneOf(['study', 'development', 'meeting', ''])
};

export default Icon;
