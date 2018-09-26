import * as React from "react";
import TrackingView from './TrackingView';
import { addTask, deleteTask, editTask, getAll } from "./services/tracking.service";

export const INITIAL_STATE_ACTIVE = { text: '', creationDate: null, duration: 0, type: '' };

export default class TrackingContainer extends React.Component {

  constructor() {
    super();
    this.state = { active: INITIAL_STATE_ACTIVE, list: [], error: null } ;
  }

  async componentDidMount() {
    const { error, data } = await getAll();
    this.setState({ list: data, error });
  }

  saveActivity(item) {
    if (item.id) {
      this.editActivity(item)
    } else {
      this.addActivity(item)
    }
  }

  async addActivity(task) {
    const { error, data } = await addTask(task);
    // add task to collection
    const list = [...this.state.list, data]
    this.setState({ list, active: {...INITIAL_STATE_ACTIVE}, error })
  }

  async editActivity(task) {
    const { error, data } = await editTask(task);

    // update collection
    const list = this.state.list.map( el => {
      return el.id === data.id ? data : el
    });
    // update state
    this.setState({ list, active: data, error });
  }
  async deleteActivity(task) {
    const { error, data } = await deleteTask(task.id);

    // remove element from collection
    const list = this.state.list.filter(el => task.id !== el.id);
    // check if the deleted element was selected
    const active = task.id === this.state.active.id ? INITIAL_STATE_ACTIVE : this.state.active;
    // update state
    this.setState({ list, active })
  }

  selectItem(item) {
    this.setState({ active: item })
  }

  reset() {
    this.setState({active: INITIAL_STATE_ACTIVE })
  }

  render() {
    return (
      <div>
        {this.state.list.length ?
          <TrackingView
            active={this.state.active}
            list={this.state.list}
            onSaveActivity={(newItem) => this.saveActivity(newItem)}
            onDelete={(item) => this.deleteActivity(item)}
            onItemClick={(item) => this.selectItem(item)}
            onResetActive={() => this.reset()}
          /> : 'No data'
        }
      </div>
    )
  }
}
