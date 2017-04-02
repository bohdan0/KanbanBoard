import React from 'react';

import HeaderContainer from '../header/header_container';
import ListIndexContainer from '../lists/list_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllLists();
  }

  render() {
    return (
      <div className='home'>
        <HeaderContainer />
        <ListIndexContainer />
      </div>
    );
  }
}

export default Home;