/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
// import { deleteMeetupMembersRelationship } from '../../api/mergedData';
import { deleteSingleMeetup } from '../../api/meetupData';

function MeetupCard({ meetupObj, onUpdate }) {
  const deleteMeetup = () => {
    if (window.confirm(`Do you want to delete ${meetupObj.title}?`)) {
      deleteSingleMeetup(meetupObj.id).then(() => onUpdate());
    }
  };

  const meetTime = new Date(meetupObj.meetTime);
  const formatDate = (date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  };
  const formattedMeetTime = formatDate(meetTime);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={meetupObj.imageUrl} alt={meetupObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{meetupObj.title}</Card.Title>
        <span>{meetupObj.description}</span>
        <h6> {formattedMeetTime}</h6>
        <h6> {meetupObj.location}</h6>
        <h6> {meetupObj.attending}</h6>
        <br />
        <Link href={`/meetup/${meetupObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/meetup/edit/${meetupObj.id}`} passHref>
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
    meetTime: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
    location: PropTypes.string,
    attending: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MeetupCard;
