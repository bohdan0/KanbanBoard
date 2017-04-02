import React from 'react';

import ListItem from './list_item';
import NewList from './new_list';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lists = this.props.lists;
    return (
      <div className='list-index'>
        {
          Object.keys(lists).map(listId => (
            <ListItem
              key={ listId }
              list={ lists[listId] }
            />
          ))
        }
        <NewList />
      </div>
    );
  }
}

export default ListIndex;