/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMembers } from '../api/memberData';
import MemberCard from '../components/cards/MemberCard';
// import SearchBar from '../components/search/SearchBar';

function ShowMembers() {
  const [members, setMembers] = useState([]);

  const getAllTheMembers = () => {
    getMembers().then(setMembers);
  };

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
          {members.map((member) => (
            <MemberCard key={member.id} memberObj={member} onUpdate={getAllTheMembers} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowMembers;
