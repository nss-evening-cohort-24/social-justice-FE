/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMeetups } from '../api/meetupData';
import { useAuth } from '../utils/context/authContext';
import MeetupCard from '../components/cards/MeetupCard';

function ShowMeetups() {
  const [meetups, setMeetups] = useState([]);

  const { user } = useAuth();

  const getAllTheMeetups = () => {
    getMeetups(user.uid).then(setMeetups);
  };

  useEffect(() => {
    getAllTheMeetups();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/meetup/new" passHref>
        <Button>Add A Meetup</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {meetups.map((meetup) => (
          <MeetupCard key={meetup.id} meetupObj={meetup} onUpdate={getAllTheMeetups} />
        ))}
      </div>
    </div>
  );
}

export default ShowMeetups;
