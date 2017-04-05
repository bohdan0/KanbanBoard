import { connect } from 'react-redux';

import ListItem from './list_item';
import { updateList, deleteList, moveList } from '../../actions/list_actions';

const mapStateToProps = ({ lists }, { listId }) => ({
  list: lists[listId]
});

const mapDispatchToProps = dispatch => ({
  updateList: list => dispatch(updateList(list)),
  deleteList: id => dispatch(deleteList(id)),
  moveList: (list, newPosition) => dispatch(moveList(list, newPosition))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);