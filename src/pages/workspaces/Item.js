import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import request from '../../request';

class ItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({ email: '', workspace: {}, members: [] });

    this.invite = this.invite.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const workspace = await request(`/workspaces/${id}`)
      .then(response => response.json())
      .then(response => response.workspace);

    const members = await request(`/workspaces/${id}/members`)
      .then(response => response.json())
      .then(response => response.users);

    this.setState({ workspace, members });
  }

  invite(event) {
    event.preventDefault();

    const { workspace, email } = this.state;

    return request('/workspaces/invite', {
      method: 'POST',
      body: JSON.stringify({ workspace_id: workspace.id, email }),
    })
      .then(response => response.json())
      .then(response => console.log(response));
  }

  handleChange(event) {
    const email = event.target.value;
    this.setState({ email });
  }

  render() {
    const { workspace, members } = this.state;
    return (
      <div>
        <h2>{workspace.name} </h2>

        <div>Invite people to workspace:</div>
        <br />
        <form onSubmit={this.invite}>
          <Input id="email" name="email" placeholder="Enter email" type="email" required label="User email" onChange={this.handleChange} />
          <br />
          <Button type="submit">Invite</Button>
        </form>

        <br />
        <br />
        <h3>Members:</h3>
        <ul>
          { members.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    );
  }
}

export default ItemPage;
