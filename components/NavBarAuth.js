/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';
import home from '../images/home.png';
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
        <Nav className="me-auto">
          {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
          <Link passHref href="/organization">
            <Nav.Link><img alt="home" src={home.src} id="home-image" /></Nav.Link>
          </Link>
          <Link passHref href="/meetups">
            <Nav.Link>Meetups</Nav.Link>
          </Link>
          <Link passHref href="/meetup/new">
            <Nav.Link>Create Meetup</Nav.Link>
          </Link>
          <Link passHref href="/members">
            <Nav.Link>Members</Nav.Link>
          </Link>
          {member ? null : <CreateMemberBtn />}
        </Nav>
        <SearchBar />
        <Button variant="danger" id="signout-btn" onClick={signOut}>Sign Out</Button>
      </Container>
    </Navbar>
  );
}
