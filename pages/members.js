/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/cards/MemberCard';
// import SearchBar from '../components/search/SearchBar';

function ShowMembers() {
  // TODO: Set a state for members
  const [members, setMembers] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the members
  const getAllTheMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  // TODO: make the call to the API to get all the members on component render
  useEffect(() => {
    getAllTheMembers();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <Link href="/member/new" passHref>
          <Button>Add A Member</Button>
        </Link>
        <div className="d-flex flex-wrap">
          {/* TODO: map over members here using MemberCard component */}
          {members.map((member) => (
            <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTheMembers} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowMembers;
