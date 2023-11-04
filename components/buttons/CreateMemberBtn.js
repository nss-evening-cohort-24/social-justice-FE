import Link from 'next/link';
import { Nav } from 'react-bootstrap';

export default function CreateMemberBtn() {
  return (
    <Link passHref href="/member/new">
      <Nav.Link>Create Member</Nav.Link>
    </Link>
  );
}
