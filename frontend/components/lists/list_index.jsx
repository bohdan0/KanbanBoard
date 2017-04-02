import React from 'react';

import ListItemContainer from './list_item_container';
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
            <ListItemContainer
              key={ listId }
              list={ lists[listId] }
            />
          ))
        }
        <NewList createList={ this.props.createList } />
      </div>
    );
  }
}

export default ListIndex;