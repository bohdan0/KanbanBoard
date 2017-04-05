import { connect } from 'react-redux';

import ListIndex from './list_index';
import { createList } from '../../actions/list_actions';
import { selectListIds } from '../../selectors/lists_selector';

const mapStateToProps = ({ lists, currentUser }) => ({
  list_ids: selectListIds(lists, currentUser.list_ids)
});

const mapDispatchToProps = dispatch => ({
  createList: list => dispatch(createList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);