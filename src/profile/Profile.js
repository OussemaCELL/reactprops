import React from 'react'

const Profile = (props) => {
  return (

    <div>
          {props.alertMyInput(props.fullName)}
      <p>full name:{props.fullName}</p>
      <p>Bio : {props.bio} </p>
      <p>profession: {props.profession} </p>
      <img src={props.children} />
    </div>
  )
}

export default Profile


