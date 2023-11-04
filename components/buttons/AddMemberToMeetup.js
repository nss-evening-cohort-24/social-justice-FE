import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { addMemberToMeetup } from '../../api/meetupData';

export default function AddMemberToMeetup({ meetupId, memberId }) {
  const router = useRouter();

  console.log('testing meetupid from parent', meetupId);
  console.log('testing member from parent', memberId);

  const AddMember = () => {
    addMemberToMeetup(meetupId, memberId).then(() => {
      router.push(`/meetup/${meetupId}`).then(() => window.location.reload());
    });
  };

  return (
    <Button type="button" size="lg" className="copy-btn" onClick={AddMember}>Join Meetup</Button>
  );
}

AddMemberToMeetup.propTypes = {
  meetupId: PropTypes.number,
  memberId: PropTypes.number,
};

AddMemberToMeetup.defaultProps = {
  meetupId: 0,
  memberId: 0,
};
