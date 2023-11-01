import { useEffect, useState } from 'react';
import MemberForm from '../components/forms/MemberForm';
import Welcome from '../components/Welcome';
import { checkUser } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const [member, setMember] = useState();

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)?.then(setMember);
  }, [user.uid]);
  return (
    member ? <Welcome /> : <MemberForm />
  );
}
