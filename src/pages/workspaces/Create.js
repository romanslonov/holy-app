import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Input from '../../components/Input';
import request from '../../request';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = ({ workspace: { name: '' } });

    this.createWorkspace = this.createWorkspace.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createWorkspace(event) {
    event.preventDefault();

    const { workspace } = this.state;

    request('/workspaces/create/', {
      method: 'POST',
      body: JSON.stringify({ name: workspace.name }),
    })
      .then(response => response.json())
      .then(() => {
        setTimeout(() => {
          // const { router } = this.context;
          // router.history.replace('/');
        }, 400);
      });
  }

  handleChange(event) {
    const field = event.target.name;
    const { workspace } = this.state;
    workspace[field] = event.target.value;

    this.setState({ workspace });
  }

  render() {
    return (
      <div>
        <h2>Create your first workspace!</h2>
        <form onSubmit={this.createWorkspace}>
          <Input id="name" label="Name" required type="text" name="name" onChange={this.handleChange} />
          <Button type="submit">Create workspace</Button>
        </form>
      </div>
    );
  }
}

Create.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Create;
