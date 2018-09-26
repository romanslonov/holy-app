import React, { Component } from 'react';
// import request from '../request';

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({ message: '', workspaces: [] });
  }

  // async componentDidMount() {
  //   const message = await request('/')
  //     .then(response => response.json())
  //     .then(response => response.message);
  //   const workspaces = await request('/workspaces/')
  //     .then(response => response.json())
  //     .then(response => response.workspaces);
  //   this.setState({ message, workspaces });
  // }

  render() {
    const { message, workspaces } = this.state;
    return (
      <div>
        <h2>This is secret message from API: {message}</h2>
        <p>Only for authenticated users</p>
        <ul>
          {workspaces.map(({ id, name }) => (
            <li id={id} key={id}>
              <a href={`/workspaces/${id}`}>{`${name}`}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedPage;
