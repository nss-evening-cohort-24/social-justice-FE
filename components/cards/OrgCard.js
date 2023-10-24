/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function OrgCard({ orgObj }) {
  return (
    <Card id="org-card" style={{ width: '60rem', margin: '10px' }}>
      <Card.Img variant="top" src={orgObj.logo} alt={orgObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{orgObj.name}</Card.Title>
        <Card.Text><b>Our Mission</b> <br />{orgObj.mission}</Card.Text>
        <Card.Text>Established: {orgObj.established}</Card.Text>
        <Card.Text>Member Count: {orgObj.memberCount}</Card.Text>
      </Card.Body>
    </Card>
  );
}

OrgCard.propTypes = {
  orgObj: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
    mission: PropTypes.string,
    established: PropTypes.string,
    memberCount: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
