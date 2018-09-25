import React, { Component } from 'react';
import request from '../../request';

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({ workspaces: [] });
  }

  async componentDidMount() {
    const workspaces = await request('/workspaces/')
      .then(response => response.json())
      .then(response => response.workspaces);
    this.setState({ workspaces });
  }

  render() {
    const { workspaces } = this.state;
    return (
      <div>
        <h2>List of workspaces</h2>
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
