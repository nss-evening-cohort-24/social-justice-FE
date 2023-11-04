/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getSingleMeetup } from '../../api/meetupData';
import martinHoward from '../../images/martinHoward.jpg';

export default function ViewMeeting() {
  const [meetingDetails, setMeetingDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleMeetup(id)?.then(setMeetingDetails);
  }, [id]);

  const meetTime = new Date(meetingDetails.meetTime);
  const createTime = new Date(meetingDetails.dateCreated);
  const formatDate = (date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  };
  const formattedMeetTime = formatDate(meetTime);
  const formattedCreateTime = formatDate(createTime);

  return (
    <>
      <img alt="img" src={martinHoward.src} id="howard" />
      <div className="mt-5 d-flex flex-wrap">
        <div className="img d-flex flex-column">
          <img src={meetingDetails.imageUrl} alt={meetingDetails.title} style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="ms-5 details">
          <h3>{meetingDetails.title}</h3>
          <br />
          <p>Location: {meetingDetails.location}</p>
          <p>Time: {formattedMeetTime}</p>
          <p>Attending So Far: {meetingDetails.attending}</p>
          <p>
            What to Know: <br />
            {meetingDetails.description}
          </p>
          <p>Created At: {formattedCreateTime}</p>
          <hr />
        </div>
      </div>
      <Button className="addMember">Add Member to Meetup</Button>
    </>
  );
}
