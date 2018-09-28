import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const header = props.title ? (<div className="card-header">
    {props.title}
  </div>) : null;

  return (
    <div className="card bg-dark text-white mb-3 ">
      { header }
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
};

Card.propTypes = {
  title: PropTypes.string,
  col: PropTypes.number,
  children: PropTypes.element.isRequired
};

Card.defaultProps = {
  col: 12
};

export default Card;
