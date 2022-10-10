import React from 'react';
import {useSelector} from 'react-redux'

const Profile = () => {

  const user = useSelector((state) => state.user.value) // we called obj value

  const themeColour = useSelector((state) => state.theme.value);

  return (
    <div style={{color: themeColour}}>
        <h2>Profile Page</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile;
