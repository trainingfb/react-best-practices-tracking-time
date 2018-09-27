import * as React from "react";
import TrackingView from './TrackingView';
import { addTask, deleteTask, editTask, getAll } from "./services/tracking.service";

export const INITIAL_STATE_ACTIVE = { text: '', creationDate: null, duration: 0, type: '' };

export default class TrackingContainer extends React.Component {

  constructor() {
    super();
    this.state = { active: INITIAL_STATE_ACTIVE, tasks: [], error: null } ;
  }

  async componentDidMount() {
    const { error, data } = await getAll();
    this.setState({ tasks: data, error });
  }

  saveTask(item) {
    if (item.id) {
      this.editActivity(item)
    } else {
      this.addActivity(item)
    }
  }

  async addActivity(task) {
    const { error, data } = await addTask(task);
    // add task to collection
    const tasks = [...this.state.tasks, data]
    this.setState({ tasks, active: {...INITIAL_STATE_ACTIVE}, error })
  }

  async editActivity(task) {
    const { error, data } = await editTask(task);

    // update collection
    const tasks = this.state.tasks.map( el => {
      return el.id === data.id ? data : el
    });
    // update state
    this.setState({ tasks, active: data, error });
  }
  async deleteTask(task) {
    const { error } = await deleteTask(task.id);

    // remove element from collection
    const tasks = this.state.tasks.filter(el => task.id !== el.id);
    // check if the deleted element was selected
    const active = task.id === this.state.active.id ? INITIAL_STATE_ACTIVE : this.state.active;
    // update state
    this.setState({ tasks, active, error })
  }

  setActive(item) {
    this.setState({ active: item })
  }

  reset() {
    this.setState({active: INITIAL_STATE_ACTIVE })
  }

  render() {
    return (
      <div>
        {this.state.tasks.length ?
          <TrackingView
            active={this.state.active}
            tasks={this.state.tasks}
            onTaskSave={(newItem) => this.saveTask(newItem)}
            onTaskDelete={(item) => this.deleteTask(item)}
            onTaskSetActive={(item) => this.setActive(item)}
            onTaskReset={() => this.reset()}
          /> : 'No data'
        }
      </div>
    )
  }
}
