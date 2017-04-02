import React from 'react';

class NewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.createList = this.createList.bind(this);
  }

  createList(e) {
    e.preventDefault();
    e.target.firstElementChild.blur();
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
        <form onSubmit={ this.createList }>
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