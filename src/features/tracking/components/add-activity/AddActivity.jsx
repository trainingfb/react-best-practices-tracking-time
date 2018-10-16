import React from 'react';
import PropTypes from 'prop-types';

class AddActivity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: {...props.active}
    }
  }

  componentDidUpdate(prevProps) {
    // Update only when active changes from parent
    const active = this.props.active;
    if (active !== prevProps.active) {
      this.setState({ active })
    }
  }

  /**
   * OnChange Control
   * @param event KeyboardEvent
   * @param field String
   */
  onChange(event, field) {
    const { target: { name, type, value }} = event;
    const active = {
      ...this.state.active,
      [name]: type === 'number' ? +value : value
    };
    this.setState({ active });
  }

  /**
   * Submit Form
   * @param e MouseEvent
   */
  submit(e) {
    e.preventDefault();
    this.props.onTaskSave(this.state.active);
  };

  render() {
    const { active: { id, text, type = '', duration = 0} } = this.state;
    const label = id ? 'EDIT' : 'ADD';
    const valid = text.length > 2;

    return (
      <form
        noValidate
        onSubmit={this.submit.bind(this)}
      >
        <input
          type="text"
          name="text"
          className="form-control mb-1"
          placeholder="Activity Description (min 3 chars)"
          value={text}
          onChange={this.onChange.bind(this)}
        />

        <div className="row mb-1">
          <div className="col">
            <select
              name="type"
              className="form-control"
              value={type}
              onChange={this.onChange.bind(this)}
            >
              <option value="">nothing</option>
              <option value="meeting">meeting</option>
              <option value="development">development</option>
              <option value="study">study</option>
            </select>
          </div>
          <div className="col">
            <input
              type="number"
              name="duration"
              className="form-control"
              placeholder="Duration (in minutes)"
              value={duration}
              onChange={this.onChange.bind(this)}
            />
          </div>
        </div>

        <div className="btn-group btn-group-sm mt-1">
          {
            valid ?
              <button type="submit" className="btn btn-warning">
                {label}
              </button> : null
          }

          <button
            type="button"
            className="btn btn-light"
            onClick={this.props.onTaskReset}
          >RESET</button>
        </div>
      </form>
    )
  }

}


AddActivity.propTypes = {
  active: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    creationDate: PropTypes.number,
    duration: PropTypes.number,
    type: PropTypes.string
  }),
  onTaskSave: PropTypes.func.isRequired,
  onTaskReset: PropTypes.func
};

AddActivity.defaultProps = {
  active: {
    text: ''
  }
};

export default AddActivity;
