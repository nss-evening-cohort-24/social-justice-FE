/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMeetingDetails } from '../../api/mergedData';

export default function ViewMeeting() {
  const [meetingDetails, setMeetingDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getMeetingDetails(firebaseKey).then(setMeetingDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={meetingDetails.image} alt={meetingDetails.title} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {meetingDetails.title}
        </h5>
        <p>Location: {meetingDetails.location}</p>
        <p>Time: {meetingDetails.time}</p>
        <p>Attending So Far: {meetingDetails.attending}</p>
        <p>Created At: {meetingDetails.created_at}</p>
        <p>Description: <br />{meetingDetails.description}</p>
        <hr />
      </div>
    </div>
  );
}
