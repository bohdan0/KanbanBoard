import { connect } from 'react-redux';

import ListIndex from './list_index';

const mapStateToProps = ({ lists }) => ({
  lists
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);