import React from 'react';
import MeetupForm from '../../components/forms/MeetupForm';
import irenaOrlov from '../../images/irenaOrlov.jpg';

export default function AddMember() {
  return (
    <>
      <img alt="img" src={irenaOrlov.src} id="irena" />
      {/* <div className="pinkImg"> </div> */}
      <div className="meet-form">
        <MeetupForm />
      </div>
    </>
  );
}
