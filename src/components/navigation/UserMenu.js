import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InjectSheet from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Auth from '../../Auth';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  skeleton: {
    backgroundColor: '#f2f6fa',
    width: '90px',
    height: '14px',
    borderRadius: '8px',
  },
  link: {
    color: '#445c7f',
    textDecoration: 'none',
  },
  item: {
    marginLeft: '8px',
  },
});

class UserMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.deauthenticateUser = this.deauthenticateUser.bind(this);
  }

  deauthenticateUser() {
    Auth.deauthenticateUser();
    const { router } = this.context;
    router.history.replace('/auth/login/');
  }

  render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.item}>
          {
            user.name
              ? <Link className={classes.link} to="/profile">Hello, {user.name}!</Link>
              : <div className={classes.skeleton} />
          }
        </div>
        {user.role === 'admin' && (
          <div className={classes.item}>
            <Link className={classes.link} to="/admin">Manage</Link>
          </div>
        )}
        <div className={classes.item}>
          <button type="button" onClick={this.deauthenticateUser}>Logout</button>
        </div>
      </div>
    );
  }
}

UserMenu.contextTypes = {
  router: PropTypes.object.isRequired,
};

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

const composedUserMenu = compose(
  connect(mapStateToProps, null),
  InjectSheet(styles),
)(UserMenu);

export default composedUserMenu;
