import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Task list</h1>
        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
          <p>{newTask}</p>
        </form>

      </div>
    );
  }
}
