import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InjectSheet from 'react-jss';
import Button from '../../components/Button';
import Box from '../../components/Box';
import Input from '../../components/Input';
import request from '../../request';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  form: {
    maxWidth: '320px',
    margin: '0 auto',
  },
  button: {
    marginTop: `${theme.spacing.unit * 4}px`,
  },
});

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
    const { classes } = this.props;
    return (
      <Box>
        <div className={classes.root}>
          <h2>Create workspace</h2>
          <p>Or get invite by your team to start working</p>
          <form className={classes.form} onSubmit={this.createWorkspace}>
            <Input hideLabel placeholder="Workspace name" id="name" label="Name" required type="text" name="name" onChange={this.handleChange} />
            <div className={classes.button}>
              <Button type="submit">Create workspace</Button>
            </div>
          </form>
        </div>
      </Box>
    );
  }
}

Create.contextTypes = {
  router: PropTypes.object.isRequired,
};

Create.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InjectSheet(styles)(Create);
