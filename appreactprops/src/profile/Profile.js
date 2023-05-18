
import React from 'react'
import {  Button, Card } from 'react-bootstrap'
import PropTypes from "prop-types";

const Profile = ({fullName,bio,profession,img,stylin,handleName}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} style={stylin} />
    <Card.Body>
      <Card.Title>{fullName}</Card.Title>
      <Card.Text>
        {bio}
      </Card.Text>
      
      <Button variant="primary" onClick={(e)=>handleName(fullName,e.preventDefault)}>Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}
Profile.defaultProps={
  fullName:"personne X",
  bio:"blablabla",
  profession:"métier"

}
Profile.propTypes={
  fullName: PropTypes.string,
  bio: PropTypes.string,
}

export default Profile