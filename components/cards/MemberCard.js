// import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import { deleteMember } from '../../api/memberData';

export default function MemberCard({ memberObj, onUpdate }) {
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.firstName} ${memberObj.lastName}?`)) {
      deleteMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div id="member-card-div">
      <Card id="member-card" style={{ width: '18rem' }}>
        <Card.Img id="member-img" variant="top" src="{memberObj.image}" alt={memberObj.firstName} />
        <Card.Body>
          <Card.Title>
            {memberObj.firstName}
            {memberObj.lastName}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Email: {memberObj.email}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Phone: {memberObj.phone}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Member Since: {memberObj.memberSince}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link href="$" passHref>
            <Button>Edit</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisMember}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    memberSince: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
