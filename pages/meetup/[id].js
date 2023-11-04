/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getSingleMeetup } from '../../api/meetupData';
import { useAuth } from '../../utils/context/authContext';
import { checkUser } from '../../api/memberData';
import AddMemberToMeetup from '../../components/buttons/AddMemberToMeetup';
import RemoveMemberMeetup from '../../components/buttons/RemoveMemberFromMeetup';
import martinHoward from '../../images/martinHoward.jpg';

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

  const meetTime = new Date(meetingDetails?.meetTime);
  const createTime = new Date(meetingDetails?.dateCreated);
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
          <img src={meetingDetails?.imageUrl} alt={meetingDetails?.title} style={{ width: '300px', height: '300px' }} />
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
      {!meetupMemberId ? <AddMemberToMeetup meetupId={meetingDetails?.id} memberId={member?.id} /> : null }

      {/* {meetingDetails?.members?.map((m) => (
        <div key={m.id}>
          <ul className="text-white">
            <li>{`Member:  ${m.firstName} ${m.lastName}`}</li>
            <li>{`Email: ${m.email}`}</li>
            <li>{m.id === meetupMemberId ? <RemoveMemberMeetup /> : null}</li>
            <li><Link href={`/member/${m.id}`}>Member Details</Link></li>
          </ul>
        </div>
      ))} */}

      <table className="text-white table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Email</th>
            <th>Leave Meetup</th>
            <th>Member Details</th>
          </tr>
        </thead>
        <tbody>
          {meetingDetails?.members?.map((m) => (
            <tr key={m.id}>
              <td className="cell">{`${m?.firstName} ${m?.lastName}`}</td>
              <td className="cell">{m?.email}</td>
              <td className="cell">
                {m?.id === meetupMemberId?.id ? (
                  <RemoveMemberMeetup meetupId={meetingDetails?.id} memberId={m?.id} />
                ) : null}
              </td>
              <td className="cell">
                <Link href={`/member/${m?.id}`}>View Member</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
