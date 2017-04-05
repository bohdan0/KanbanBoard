import React from 'react';
import { DropTarget } from 'react-dnd';

import { dropTarget, dropCollect } from './dnd/list_index';
import ListItemContainer from './list_item_container';
import NewList from './new_list';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list_ids, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className='list-index'>
        {
          list_ids.map(listId => (
            <ListItemContainer
              key={ listId }
              listId={ listId }
              list_ids={ list_ids }
            />
          ))
        }
        <NewList createList={ this.props.createList } />
      </div>
    );
  }
}

export default DropTarget('list', dropTarget, dropCollect)(ListIndex);