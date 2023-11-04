/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';
import CreateMemberBtn from './buttons/CreateMemberBtn';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../api/memberData';

export default function NavBarAuth() {
  const [member, setMember] = useState();

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)?.then(setMember);
  }, [user.uid]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>One HOME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/organization">
              <Nav.Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
              </Nav.Link>
            </Link>
            <Link passHref href="/meetups">
              <Nav.Link className="navMeet">Meetups</Nav.Link>
            </Link>
            <Link passHref href="/meetup/new">
              <Nav.Link className="navNewMeet">Create Meetup</Nav.Link>
            </Link>
            <Link passHref href="/members">
              <Nav.Link className="navMem">Members</Nav.Link>
            </Link>
            {member ? null : <CreateMemberBtn />}
            <SearchBar className="navSearch" />
            <Button className="signOut" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
