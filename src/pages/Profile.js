import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ user }) => (
  <div className="container text-align-center">
    <h1>Hello! {user.name}</h1>
  </div>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};


export default Profile;
