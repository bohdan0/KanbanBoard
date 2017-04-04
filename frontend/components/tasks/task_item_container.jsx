import { connect } from 'react-redux';

import TaskItem from './task_item';
import { updateTask, deleteTask, moveTask } from '../../actions/task_actions';

const mapStateToProps = ({ lists }, { task }) => ({
  list: lists[task.list_id]
});

const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: id => dispatch(deleteTask(id)),
  moveTask: (task, newListId, newPosition) => dispatch(moveTask(task, newListId, newPosition))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);