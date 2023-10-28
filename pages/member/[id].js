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

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={memberDetails.imageUrl} alt={memberDetails.email} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          {memberDetails.firstName} {memberDetails.lastName}
        </h5>
        <p>Email: {memberDetails.email}</p>
        <p>Phone: {memberDetails.phone}</p>
        <p>Member Since: {memberDetails.memberSince}</p>
        <hr />
      </div>
    </div>
  );
}
