import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { flow } from 'lodash';
import FontAwesome from 'react-fontawesome';

import { taskSource,
         sourceCollect,
         dropTarget,
         dropCollect } from './dnd/task_item';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;

    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask() {
    this.props.deleteTask(this.state.id);
  }

  updateTask() {
    this.props.updateTask(this.state);
  }

  update(type) {
    if (type === 'resolved') {
      return () => this.setState({ [type]: !this.state[type] }, this.updateTask);
    } else {
      return (event) => this.setState({ [type]: event.target.value });
    }
  }

  render() {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <div className='task-item'>
        <form onSubmit={ this.updateTask }>
          <input
            type="checkbox"
            onChange={ this.update('resolved') }
            checked={ this.state.resolved }
          />
          <input
            type='text'
            className='task-item-title'
            value={ this.state.title }
            onChange={ this.update('title') }
          />
          <FontAwesome
            onClick={ this.deleteTask }
            className='task-item-delete'
            name='times'
            size='2x'
          />
        </form>
      </div>
    ));
  }
}

export default flow(
  DragSource('task', taskSource, sourceCollect),
  DropTarget('task', dropTarget, dropCollect)
)(TaskItem);