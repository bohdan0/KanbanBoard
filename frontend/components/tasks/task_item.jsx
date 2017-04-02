import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className='task-item'>
      { task.title }
    </div>
  );
};

export default TaskItem;