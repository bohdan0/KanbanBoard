import React from 'react';
import { DragSource } from 'react-dnd';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;

    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newList && nextProps.isDragging
        && this.props.task.list_id !== nextProps.newList.id) 
    {
      this.props.moveTask(this.props.task, nextProps.newList);
    }
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
      return () => this.setState({ [type]: event.target.value });
    }
  }

  render() {
    const { id } = this.props.task;
    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
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
    );
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
    const list = monitor.getDropResult();
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    newList: monitor.getDropResult()
  };
};

export default DragSource('task', taskSource, collect)(TaskItem);