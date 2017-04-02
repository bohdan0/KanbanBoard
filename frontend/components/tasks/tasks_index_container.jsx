import { connect } from 'react-redux';

import TaskIndex from './task_index';
import { selectTasks } from '../../selectors/tasks_selector';

const mapStateToProps = ({ tasks }, { task_ids }) => ({
  tasks: selectTasks(tasks, task_ids)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);