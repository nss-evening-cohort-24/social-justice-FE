/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getMeetups, updateMeetup, createMeetup } from '../../api/meetupData';

const initialState = {
  title: '',
  description: '',
  image: '',
  location: '',
};

function MeetupForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setMeetups] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getMeetups(user.uid).then(setMeetups);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateMeetup(formInput).then(() => router.push('/meetups'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMeetup(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateMeetup(patchPayload).then(() => {
          router.push('/meetups');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Member</h2>

      {/* Title  */}
      <FloatingLabel controlId="floatingInput1" label="Meetup Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Meetup Title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Description  */}
      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Meetup Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Meetup Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Location  */}
      <FloatingLabel controlId="floatingInput3" label="Location" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Location"
          name="location"
          value={formInput.location}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Meetup</Button>
    </Form>
  );
}

MeetupForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

MeetupForm.defaultProps = {
  obj: initialState,
};

export default MeetupForm;
