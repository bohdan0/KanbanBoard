import { connect } from 'react-redux';

import TaskItem from './task_item';
import { updateTask,
         deleteTask,
         moveTask } from '../../actions/task_actions';

const mapStateToProps = (_, { taskId }) => ({ lists, taskState }) => ({
  task: taskState.tasks[taskId],
  task_ids: taskState.task_ids[taskState.tasks[taskId].list_id] // is used for task dnd
});

const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: id => dispatch(deleteTask(id)),
  moveTask: (task, newListId, newPosition) => dispatch(moveTask(task, newListId, newPosition))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);