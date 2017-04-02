import React from 'react';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.createTask = this.createTask.bind(this);
  }

  createTask(e) {
    e.preventDefault();
    this.props.createTask(this.state)
      .then(this.setState({ title: ''}));
  }

  update(type) {
    return event => {
      this.setState({ [type]: event.target.value });
    };
  }

  render() {
    return (
      <div className='task-item'>
        <form onSubmit={ this.createTask }>
          <input
            type="text"
            value={ this.state.title }
            placeholder='Add a task'
            onChange={ this.update('title') }
          />
        </form>
      </div>
    );
  }
}

export default NewTask;