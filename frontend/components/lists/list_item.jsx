import React from 'react';

import TaskIndexContainer from '../tasks/tasks_index_container';

const ListItem = ({ list }) => {
  return (
    <div className='list-item'>
      <span className='list-item-title'>
        { list.title }
      </span>
      <TaskIndexContainer task_ids={ list.task_ids } />
    </div>
  );
};

export default ListItem;