/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function OrgCard({ orgObj }) {
  const meetTime = new Date(orgObj.created_at);
  const formatDate = (date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  };
  const formattedCreatedTime = formatDate(meetTime);

  return (
    <Card id="org-card" style={{ width: '85%', height: '300px' }}>
      <div className="orgImg">
        <Card.Img className="org-card-img" src="https://source.unsplash.com/random/300x300/?business-building" style={{ width: '300px', height: '300px' }} />
      </div>
      <div className="org-card-body">
        <h2>{orgObj.name}</h2>
        <p>Our Mission <br />{orgObj.mission}</p>
        <p>Established: {formattedCreatedTime}</p>
        <p>Members: {orgObj.memberCount}</p>
      </div>
    </Card>
  );
}

OrgCard.propTypes = {
  orgObj: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
    mission: PropTypes.string,
    created_at: PropTypes.string,
    memberCount: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
