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
    <Card id="meet-card" style={{ width: '80%', height: '300px' }}>
      <Card.Img variant="top" src={meetupObj.imageUrl} alt={meetupObj.title} style={{ width: '300px', height: '300px' }} />
      <Card.Body className="card-body d-flex flex-md-row">
        <div className="meet-text">
          <h2>{meetupObj.title}</h2>
          <p>{meetupObj.description}</p>
          <p>{formattedMeetTime}</p>
          <p>{meetupObj.location}</p>
          <p>Members Attending: {meetupObj.attending}</p>
          <br />
        </div>
        <div className="meet-buttons">
          <Link href={`/meetup/${meetupObj.id}`} passHref>
            <Button variant="primary" className="m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
              </svg>
            </Button>
          </Link>
          <Link href={`/meetup/edit/${meetupObj.id}`} passHref>
            <Button variant="info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </Button>
          </Link>
          <Button variant="danger" onClick={deleteMeetup} className="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>
          </Button>
        </div>
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
    attending: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MeetupCard;
