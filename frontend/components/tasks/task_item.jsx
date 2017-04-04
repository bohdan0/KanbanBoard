import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { flow } from 'lodash';

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
    const { id } = this.props.task;
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
          <input
            type='button'
            className='task-item-delete'
            onClick={ this.deleteTask }
          />
        </form>
      </div>
    ));
  }
}

const taskSource = {
  beginDrag(props) {
    const { task } = props;
    return task;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const task = monitor.getItem();
    const { listId, newPosition } = monitor.getDropResult();
    props.moveTask(task, listId, newPosition);
  }
};

const sourceCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    newList: monitor.getDropResult()
  };
};

const dropTarget = {
  drop(props, monitor, component) {
    const { task } = props;
    return { listId: task.list_id, newPosition: task.position };
  }
};

const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

export default flow(
  DragSource('task', taskSource, sourceCollect),
  DropTarget('task', dropTarget, dropCollect)
)(TaskItem);