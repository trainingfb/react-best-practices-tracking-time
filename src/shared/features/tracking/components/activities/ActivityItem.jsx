import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from "../../../../components/Icon";

export const ActivityItem = (props) => {
  const { selected, task, onDelete, onItemClick} = props;

  const cls = classnames(
    'list-group-item list-group-item-action',
    {'bg-info text-white actived': selected }
  );

  const deleteTask = (event) => {
    event.stopPropagation();
    props.onDelete();
  };

  return (
    <li key={task.id}
        onClick={onItemClick}
        className={cls}
    >
      <Icon type={task.type} /> {task.text}

      <div className="pull-right">
        { task.duration ? <span>{task.duration}m </span> : 'no time '}
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
    creationDate: PropTypes.number,
    type: PropTypes.string
  }),
  onDelete: PropTypes.func,
  onItemClick: PropTypes.func
};
