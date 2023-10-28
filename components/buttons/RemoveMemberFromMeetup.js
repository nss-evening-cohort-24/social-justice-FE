import { Button } from 'react-bootstrap';
import { removeMemberFromMeetup } from '../../api/meetupData';

export default function RemoveMemberFromMeetup() {
  <Button type="button" size="lg" className="copy-btn" onClick={removeMemberFromMeetup}>Remove Member From Meetup</Button>;
}
