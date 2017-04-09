import { connect } from 'react-redux';

import ListItem from './list_item';
import { updateList,
         deleteList,
         moveList } from '../../actions/list_actions';

const mapStateToProps = (_, { listId }) => ({ listState, taskState }) => ({
  list: listState.lists[listId],
  list_ids: listState.list_ids,
  task_ids: taskState.task_ids[listId] // is used by list dnd
});

const mapDispatchToProps = dispatch => ({
  updateList: list => dispatch(updateList(list)),
  deleteList: id => dispatch(deleteList(id)),
  moveList: (list, newPosition) => dispatch(moveList(list, newPosition))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);