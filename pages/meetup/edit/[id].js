import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleMeetup } from '../../../api/meetupData';
import MeetupForm from '../../../components/forms/MeetupForm';

export default function EditMeetup() {
  const [editMeetup, setEditMeetup] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleMeetup(id).then(setEditMeetup);
  }, [id]);

  return (<MeetupForm obj={editMeetup} />);
}
