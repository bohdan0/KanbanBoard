import React from 'react';

import TaskItemContainer from './task_item_container';
import NewTask from './new_task';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(task) {
    task.list_id = this.props.list.id;
    return this.props.createTask(task);
  }

  render() {
    const tasks = this.props.tasks;
    const list = this.props.list;
    return (
      <div className='task-index'>
        <NewTask createTask={ this.createTask } />
        {
          list.task_ids.map(taskId => (
            <TaskItemContainer
              key={ taskId }
              task={ tasks[taskId] }
            />
          ))
        }
      </div>
    );
  }
}

export default TaskIndex;