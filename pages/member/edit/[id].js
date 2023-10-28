import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../../api/memberData';
import MemberForm from '../../../components/forms/MemberForm';

function EditMember() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { id } = router.query;

  // TODO: make a call to the API to get the member data
  useEffect(() => {
    getSingleMember(id).then(setEditItem);
  }, [id]);

  // TODO: pass object to form
  return (<MemberForm obj={editItem} />);
}

export default EditMember;
