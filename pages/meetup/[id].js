/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMeetup } from '../../api/meetupData';
import { useAuth } from '../../utils/context/authContext';
import { checkUser } from '../../api/memberData';
import AddMemberToMeetup from '../../components/buttons/AddMemberToMeetup';

export default function ViewMeeting() {
  const [meetingDetails, setMeetingDetails] = useState({});
  const [member, setMember] = useState();
  const router = useRouter();
  const { user } = useAuth();

  const { id } = router.query;

  useEffect(() => {
    getSingleMeetup(id)?.then(setMeetingDetails);
  }, [id]);

  useEffect(() => {
    checkUser(user.uid)?.then(setMember);
  }, [user.uid]);

  console.log('checkuser member:', member, member?.id);
  console.log('meetup:', meetingDetails);

  const meetupMemberId = meetingDetails?.members?.find((m) => (
    m?.id === member?.id
  ));
  console.log('check meetup member list id:', meetupMemberId);

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
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={meetingDetails.image} alt={meetingDetails.title} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>{meetingDetails.title}</h5>
          <p>Location: {meetingDetails.location}</p>
          <p>Time: {formattedMeetTime}</p>
          <p>Attending So Far: {meetingDetails.attending}</p>
          <p>Created At: {formattedCreateTime}</p>
          <p>
            Description: <br />
            {meetingDetails.description}
          </p>
          <hr />
        </div>
      </div>
      {meetupMemberId ? null : <AddMemberToMeetup meetupId={meetingDetails?.id} memberId={member?.id} />}
    </>
  );
}
