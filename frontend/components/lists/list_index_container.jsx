import { connect } from 'react-redux';

import ListIndex from './list_index';
import { createList } from '../../actions/list_actions';

const mapStateToProps = ({ listState }) => ({
  list_ids: listState.list_ids
});

const mapDispatchToProps = dispatch => ({
  createList: list => dispatch(createList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);