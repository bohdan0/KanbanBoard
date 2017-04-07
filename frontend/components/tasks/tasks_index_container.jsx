import { connect } from 'react-redux';

import TaskIndex from './task_index';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = ({ lists }, { listId }) => ({
  task_ids: lists[listId].task_ids
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);