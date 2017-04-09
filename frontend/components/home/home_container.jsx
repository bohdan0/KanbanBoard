import { connect } from 'react-redux';

import { fetchAllLists } from '../../actions/list_actions';
import Home from './home';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);