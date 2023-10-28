/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';
import home from '../images/home.png';

export default function NavBarAuth() {
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
          <Link passHref href="/member/new">
            <Nav.Link>Create Member</Nav.Link>
          </Link>
        </Nav>
        <SearchBar />
        <Button variant="danger" id="signout-btn" onClick={signOut}>Sign Out</Button>
      </Container>
    </Navbar>
  );
}
