import React from 'react';

import TaskItem from './task_item';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <div className='task-index'>
        {
          Object.keys(tasks).map(taskId => (
            <TaskItem
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