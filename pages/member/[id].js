/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../api/memberData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleMember(id).then(setMemberDetails);
  }, [id]);

  const joinedSince = new Date(memberDetails.memberSince);
  const formatDate = (date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  };
  const formattedMemberTime = formatDate(joinedSince);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="img d-flex flex-column">
        <img src={memberDetails.imageUrl} alt={memberDetails.email} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h3>
          {memberDetails.firstName} {memberDetails.lastName}
        </h3>
        <br />
        <p>Email: {memberDetails.email}</p>
        <p>Phone: {memberDetails.phone}</p>
        <p>Member Since: {formattedMemberTime}</p>
        <hr />
      </div>
    </div>
  );
}
