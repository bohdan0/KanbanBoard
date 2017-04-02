import React from 'react';

import TaskIndexContainer from '../tasks/tasks_index_container';

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
    const list = this.props.list;
    return (
      <div className='list-item'>
        <div className='list-item-header'>
          <form onSubmit={ this.updateList }>
            <input
              type='text'
              className='list-item-title'
              value={ this.state.title }
              onChange={ this.update('title') }
            />
          </form>
          <input
            type='button'
            className='list-item-delete'
            onClick={ this.deleteList }
          />
        </div>
        <TaskIndexContainer list={ list } />
      </div>
    );
  }
}

export default ListItem;