import React from 'react';

import HeaderContainer from '../header/header_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.fetchAllLists) {
      this.props.fetchAllLists();
    }
  }

  render() {
    return (
      <div className='home'>
        <HeaderContainer />
        <h1>HomeComponent</h1>
      </div>
    );
  }
}

export default Home;