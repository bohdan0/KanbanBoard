import { connect } from 'react-redux';

import ListIndex from './list_index';
import { createList } from '../../actions/list_actions';

const mapStateToProps = ({ lists }) => ({
  lists
});

const mapDispatchToProps = dispatch => ({
  createList: list => dispatch(createList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);