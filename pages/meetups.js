/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMeetups } from '../api/meetupData';
import { useAuth } from '../utils/context/authContext';
import MeetupCard from '../components/cards/MeetupCard';

function ShowMeetups() {
  const [meetups, setMeetups] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the teams
  const getAllTheMeetups = () => {
    getMeetups(user.uid).then(setMeetups);
  };

  // TODO: make the call to the API to get all the teams on component render
  useEffect(() => {
    getAllTheMeetups();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/team/new" passHref>
        <Button>Add A Meetup</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over teams here using teamCard component */}
        {meetups.map((meetup) => (
          <MeetupCard key={meetup.firebaseKey} meetupObj={meetup} onUpdate={getAllTheMeetups} />
        ))}
      </div>
    </div>
  );
}

export default ShowMeetups;
