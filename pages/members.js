/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { checkUser, getMembers } from '../api/memberData';
import MemberCard from '../components/cards/MemberCard';
import CreateMemberBtn from '../components/buttons/CreateMemberBtn';
import { useAuth } from '../utils/context/authContext';
// import SearchBar from '../components/search/SearchBar';

function ShowMembers() {
  const [members, setMembers] = useState([]);
  const [userMember, setUserMember] = useState();

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)?.then(setUserMember);
  }, [user.uid]);

  const getAllTheMembers = () => {
    getMembers().then(setMembers);
  };

  useEffect(() => {
    getAllTheMembers();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        {userMember ? null : <Button size="sm"><CreateMemberBtn /></Button>}
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
