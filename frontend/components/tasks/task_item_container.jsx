import { connect } from 'react-redux';

import TaskItem from './task_item';
import { updateTask, deleteTask, moveTask } from '../../actions/task_actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: id => dispatch(deleteTask(id)),
  moveTask: (task, listId, taskId) => dispatch(moveTask(task, listId, taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);