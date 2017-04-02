import React from 'react';

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
    return event => {
      if (type === 'resolved') {
        this.setState({ [type]: !this.state[type] }, this.updateTask);
      } else {
        this.setState({ [type]: event.target.value });
      }
    };
  }

  render() {
    return (
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

export default TaskItem;