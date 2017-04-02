import React from 'react';
import { withRouter } from 'react-router';

const Header = ({ username, logOut, router }) => (
  <div className='header'>
    <span>Hello { username }</span>
    <img
      className='header-logout'
      onClick={ () => logOut().then(() => router.push('/')) }
      alt="log_out"
      src="http://res.cloudinary.com/safenotes/image/upload/v1484796893/circular-power-on-button_xpm2sy.png"
    />
  </div>
);

export default withRouter(Header);