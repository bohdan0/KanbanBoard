import React from 'react';

import TaskItemContainer from './task_item_container';
import NewTask from './new_task';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(task) {
    task.list_id = this.props.listId;
    return this.props.createTask(task);
  }

  render() {
    const { task_ids } = this.props;

    return (
      <div className='task-index'>
        <NewTask createTask={ this.createTask } />
        {
          task_ids.map(taskId => (
            <TaskItemContainer
              key={ taskId }
              taskId={ taskId }
            />
          ))
        }
      </div>
    );
  }
}

export default TaskIndex;