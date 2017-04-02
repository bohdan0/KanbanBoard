import { connect } from 'react-redux';

import AuthForm from './auth_form';
import { logIn, signUp } from '../../actions/session_actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = formType === 'sign-up' ? signUp : logIn;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);