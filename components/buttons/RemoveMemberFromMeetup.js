import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { removeMemberFromMeetup } from '../../api/meetupData';

export default function RemoveMemberMeetup({ meetupId, memberId }) {
  const router = useRouter();

  console.log('testing meetupid from parent', meetupId);
  console.log('testing member from parent', memberId);

  const RemoveMember = () => {
    removeMemberFromMeetup(meetupId, memberId).then(() => {
      router.push(`/meetup/${meetupId}`).then(() => window.location.reload());
    });
  };

  return (
    <Button type="button" size="lg" className="copy-btn btn-danger" onClick={RemoveMember}>Leave Meetup</Button>
  );
}

RemoveMemberMeetup.propTypes = {
  meetupId: PropTypes.number,
  memberId: PropTypes.number,
};

RemoveMemberMeetup.defaultProps = {
  meetupId: 0,
  memberId: 0,
};
