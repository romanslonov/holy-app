import React, {Component} from 'react';
import request from '../request';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = ({ message: '' });
  }
  async componentDidMount() {
    const message = await request('/')
      .then(response => response.json())
      .then(({message}) => message);
    console.log(message);
    this.setState({ message });
  }
  render() {
    return (
      <div className="container">
        <h2>This is secret message from API: "{this.state.message}"</h2>
        <p>Only for authenticated users</p>
      </div>
    )
  }
}

export default HomePage;
