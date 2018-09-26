import React from 'react';
import PropTypes from 'prop-types';
import { ActivityItem } from "./ActivityItem";

const Activities = props => {
  const { active: { id } } = props;

  const deleteItem = (item) =>  {
    props.onDelete(item)
  };

  return (<div>
    {props.list.map(item => {


      return (
          <ActivityItem
            key={item.id}
            task={item}
            onItemClick={(event) => props.onItemClick(item)}
            onDelete={() => deleteItem(item)}
            selected={id === item.id}
          >
            {item.text} ( {item.id} )

            <i className="fa fa-trash icon pull-right"
               onClick={(event) => deleteItem(event, item)} />
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
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    creationDate: PropTypes.number,
    type: PropTypes.string
  })),
  onDelete: PropTypes.func,
  onItemClick: PropTypes.func
};
