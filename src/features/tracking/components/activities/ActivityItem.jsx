import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from "../../../../shared/components";

export const ActivityItem = (props) => {
  const {
    selected,
    onTaskDelete,
    onTaskSetActive,
    task: { duration, id, text, type }
  } = props;

  const cls = classnames(
    'list-group-item list-group-item-action',
    {'bg-info text-white actived': selected }
  );

  const deleteTask = (event) => {
    event.stopPropagation();
    onTaskDelete();
  };

  return (
    <li key={id}
        onClick={onTaskSetActive}
        className={cls}
    >
      {/*Task Icon + Label*/}
      <Icon type={type} /> {text}

      <div className="pull-right">
        {/*Duration*/}
        { duration ? <span>{duration}m </span> : 'no time '}
        {/*Delete Icon*/}
        <i className="fa fa-trash icon" onClick={(event) => deleteTask(event)} />
      </div>
    </li>
  )
};


ActivityItem.propTypes = {
  selected: PropTypes.bool,
  task: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    duration: PropTypes.number,
    creationDate: PropTypes.number,
    type: PropTypes.string
  }),
  onTaskDelete: PropTypes.func,
  onTaskSetActive: PropTypes.func
};
