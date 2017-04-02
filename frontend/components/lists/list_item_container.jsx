import { connect } from 'react-redux';

import ListItem from './list_item';
import { updateList, deleteList } from '../../actions/list_actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  updateList: list => dispatch(updateList(list)),
  deleteList: id => dispatch(deleteList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);