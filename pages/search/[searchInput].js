import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { searchMembers } from '../../api/mergedData';
import MemberCard from '../../components/cards/MemberCard';

export default function Search() {
  const [filteredMembers, setFilteredMembers] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const searchAllMembers = () => {
    searchMembers(searchInput, user.uid).then(setFilteredMembers);
  };

  useEffect(() => {
    searchAllMembers();
    return () => {
      setFilteredMembers([]);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <>
      <div className="d-flex flex-wrap">
        {filteredMembers.map((member) => <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={searchAllMembers} />)}
      </div>
    </>
  );
}
