import React from 'react';
import FontAwesome from 'react-fontawesome';

class NewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.createList = this.createList.bind(this);
  }

  createList(e) {
    e.preventDefault();
    if (this.state.title.length > 0)
      this.props.createList(this.state)
        .then(this.setState({ title: ''}));
  }

  update(type) {
    return event => {
      this.setState({ [type]: event.target.value });
    };
  }

  render() {
    return (
      <div className='list-item'>
        <form onSubmit={ this.createList } className='list-item-new'>
          <FontAwesome
            onClick={ this.createList }
            className='list-item-new-icon'
            name='plus'
            size='2x'
          />
          <input
            type="text"
            value={ this.state.title }
            placeholder='Add a list'
            onChange={ this.update('title') }
          />
        </form>
      </div>
    );
  }
}

export default NewList;