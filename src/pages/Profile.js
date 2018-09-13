import React from 'react';

const Profile = (user) => (
  <div className="container text-align-center">
    <h1>Hello! {user.name}</h1>
  </div>
);

export default Profile;
