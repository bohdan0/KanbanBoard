import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push('/home');
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    const text = this.props.formType === 'sign-up' ? 'Create Account' : 'Sign In';
    const firstWord = text === 'Sign In' ? 'Don\'t' : 'Already';
    const oppositeText = text === 'Sign In' ? 'Sign Up' : 'Sign In';
    const oppositeForm = text === 'Sign In' ? 'sign-up' : 'sign-in';

    return (
      <div className='auth-form'>
        <h3>Kanban Board</h3>
        <div className='auth-form-main'>
          <form onSubmit={ this.handleSubmit }>
            <input
              type="text"
              autoFocus
              className='auth-form-input'
              value={ this.state.username }
              placeholder='Username'
              onChange={ this.update('username') }
            />

            <input
              type="password"
              className='auth-form-input'
              value={ this.state.password }
              placeholder='Password'
              onChange={ this.update('password') }
            />

            <input
              type="submit"
              value={ text }
            />
          </form>
        </div>

        <div className='switch-panel'>
          <p>
            { firstWord } have an account?
            <Link to={`/${ oppositeForm }`}>{ oppositeText }</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthForm);