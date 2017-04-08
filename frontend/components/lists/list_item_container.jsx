import { connect } from 'react-redux';

import ListItem from './list_item';
import { updateList,
         deleteList,
         moveList } from '../../actions/list_actions';

const mapStateToProps = (_, { listId }) => ({ currentUser, lists }) => ({
  list_ids: currentUser.list_ids,
  list: lists[listId]
});

const mapDispatchToProps = dispatch => ({
  updateList: list => dispatch(updateList(list)),
  deleteList: id => dispatch(deleteList(id)),
  moveList: (list, newPosition) => dispatch(moveList(list, newPosition))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);