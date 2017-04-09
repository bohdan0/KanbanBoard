import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { flow } from 'lodash';
import FontAwesome from 'react-fontawesome';

import TaskIndexContainer from '../tasks/task_index_container';
import { listSource,
         sourceCollect,
         dropTarget,
         dropCollect } from './dnd/list_item';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list;

    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  deleteList() {
    this.props.deleteList(this.state.id);
  }

  updateList(e) {
    e.preventDefault();
    e.target.firstElementChild.blur();
    this.props.updateList(this.state);
  }

  update(type) {
    return event => {
      this.setState({ [type]: event.target.value });
    };
  }

  render() {
    const { listId, isDragging, connectDragSource, connectDropTarget } = this.props;
    const draggingStyle = {
      opacity: '.5'
    };

    return connectDragSource(connectDropTarget(
      <div
        className='list-item'
        style={ isDragging ? draggingStyle : {} }
      >
        <div className='list-item-header'>
          <form onSubmit={ this.updateList }>
            <input
              type='text'
              className='list-item-title'
              value={ this.state.title }
              onChange={ this.update('title') }
            />
          </form>
          <FontAwesome
            onClick={ this.deleteList }
            className='list-item-delete'
            name='times'
            size='2x'
          />
        </div>
        <TaskIndexContainer listId={ listId } />
      </div>
    ));
  }
}

export default flow(
  DragSource('list', listSource, sourceCollect),
  DropTarget(['list', 'task'], dropTarget, dropCollect)
)(ListItem);