import { connect } from 'react-redux';

import TaskIndex from './task_index';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = (_, { listId }) => ({ taskState }) => ({
  task_ids: taskState.task_ids[listId]
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);