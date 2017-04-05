import React from 'react';
import { withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

const Header = ({ username, logOut, router }) => (
  <div className='header'>
    <span>Hello { username }</span>
    <FontAwesome
      onClick={ () => logOut().then(() => router.push('/')) }
      className='header-logout'
      name='sign-out'
      size='2x'
    />
  </div>
);

export default withRouter(Header);