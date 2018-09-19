import React, { Component } from 'react';
import request from '../request';

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({ message: '' });
  }

  async componentDidMount() {
    const message = await request('/')
      .then(response => response.json())
      .then(response => response.message);
    this.setState({ message });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>This is secret message from API: {message}</h2>
        <p>Only for authenticated users</p>
      </div>
    );
  }
}

export default FeedPage;
