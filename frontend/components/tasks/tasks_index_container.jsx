import { connect } from 'react-redux';

import TaskIndex from './task_index';
import { createTask } from '../../actions/task_actions';
import { selectTasks } from '../../selectors/tasks_selector';

const mapStateToProps = ({ tasks }, { list }) => ({
  tasks: selectTasks(tasks, list.task_ids),
  list
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);