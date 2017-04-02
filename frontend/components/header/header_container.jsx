import { connect } from 'react-redux';

import Header from './header';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = ({ currentUser }) => ({
  username: currentUser.username
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);