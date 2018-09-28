import React from 'react';
import PropTypes from 'prop-types';
import { ActivityItem } from "./ActivityItem";

const Activities = props => {
  const { active: { id } } = props;

  const deleteItem = (task) =>  {
    props.onTaskDelete(task)
  };

  return (<div>
    {props.tasks.map(task => {
      return (
          <ActivityItem
            key={task.id}
            task={task}
            onTaskSetActive={(event) => props.onTaskSetActive(task)}
            onTaskDelete={() => deleteItem(task)}
            selected={id === task.id}
          >
            {task.text} ( {task.id} )

            <i className="fa fa-trash icon pull-right"
               onClick={(event) => deleteItem(event, task)} />
          </ActivityItem>
      )
    })}
  </div>);
};

export default Activities;

Activities.propTypes = {
  active: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    creationDate: PropTypes.number,
    type: PropTypes.string
  }),
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    creationDate: PropTypes.number,
    type: PropTypes.string
  })),
  onTaskDelete: PropTypes.func,
  onTaskSetActive: PropTypes.func
};
