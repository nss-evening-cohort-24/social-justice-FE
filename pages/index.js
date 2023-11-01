import { useEffect, useState } from 'react';
import MemberForm from '../components/forms/MemberForm';
import Welcome from '../components/Welcome';
import { checkUser } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const [member, setMember] = useState(null);

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)
      .then((result) => setMember(result))
      .catch(() => setMember(null));
  }, [user.uid]);

  return member ? <Welcome /> : <MemberForm />;
}
