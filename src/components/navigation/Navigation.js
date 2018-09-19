import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InjectSheet from 'react-jss';
import UserMenu from './UserMenu';
import logo from './logo.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: `${theme.spacing.unit * 6}px`,
    boxShadow: '0px 4px 6px 0px rgba(42, 56, 68, 0.05)',
  },
});

const Navigation = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Link to="/">
        <img src={logo} alt="Logotype" />
      </Link>
      <div>HolyApp</div>
      <UserMenu />
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InjectSheet(styles)(Navigation);
