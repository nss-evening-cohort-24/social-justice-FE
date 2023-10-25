import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleMeetup } from '../../../api/meetupData';
import MeetupForm from '../../../components/forms/MeetupForm';

export default function EditMeetup() {
  const [editMeetup, setEditMeetup] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMeetup(firebaseKey).then(setEditMeetup);
  }, [firebaseKey]);

  return (<MeetupForm obj={editMeetup} />);
}
