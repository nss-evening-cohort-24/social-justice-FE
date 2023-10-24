/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteMeetupMembersRelationship } from '../../api/mergedData';

function MeetupCard({ meetupObj, onUpdate }) {
  const deleteMeetup = () => {
    if (window.confirm(`Do you want to delete ${meetupObj.title}?`)) {
      deleteMeetupMembersRelationship(meetupObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={meetupObj.image} alt={meetupObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{meetupObj.title}</Card.Title>
        <span>{meetupObj.description}</span>
        <h6> {meetupObj.time}</h6>
        <h6> {meetupObj.location}</h6>
        <h6> {meetupObj.attending}</h6>
        <br />
        <Link href={`/meetup/${meetupObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/meetup/edit/${meetupObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteMeetup} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

MeetupCard.propTypes = {
  meetupObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
    location: PropTypes.string,
    attending: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MeetupCard;
