import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card'
import { deleteMember } from '../../api/memberData';

export default function MemberCard({ memberObj, onUpdate }) {
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.firstName} ${memberObj.lastName}?`)) {
      deleteMember(playerObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div id="member-card-div">
      <Card id="member-card" style={{ width: '18rem' }}>
        <Card.Img id="member-img" variant='top' src='{memberObj.image}'></Card.Img>
      </Card>
    </div>
  )
}
