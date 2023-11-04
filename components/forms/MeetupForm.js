/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { useAuth } from '../../utils/context/authContext';
import { getMeetups, updateMeetup, createMeetup } from '../../api/meetupData';

const initialState = {
  title: '',
  description: '',
  imageUrl: '',
  location: '',
  meetTime: '',
};

function MeetupForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setMeetups] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getMeetups(user.uid).then(setMeetups);

    if (obj.id) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target || e; // Handle both input changes and date picker changes

    if (name === 'meetTime') {
      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      console.log('formInput on update:', formInput);
      updateMeetup(formInput.id, formInput).then(() => router.push('/meetups'));
    } else {
      const payload = { ...formInput, organizationId: 1 };
      console.log('create payload', payload);
      createMeetup(payload).then(() => {
        router.push('/meetups');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="meet-form-text">
        <h2 className="mt-5">{obj.id ? 'Update' : 'Create'} Meetup</h2>
      </div>

      {/* Title  */}
      <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
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
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Description of the Meetup"
          style={{ height: '200px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="imageUrl"
          value={formInput.imageUrl}
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

      {/* meetTime  */}
      <FloatingLabel controlId="floatingInput3" label="Meeting Time" className="mb-3">
        {/* <Form.Control
          type="text"
          placeholder="YYYY-DD-MM"
          name="meetTime"
          value={formInput.meetTime || 'yyyy-dd-mm'}
          onChange={handleChange}
          required
        /> */}
        <ReactDatePicker
          selected={formInput.meetTime}
          onChange={(date) => handleChange({ target: { name: 'meetTime', value: date } })}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit" className="newMeet">{obj.id ? 'Update' : 'Create'} Meetup</Button>
    </Form>
  );
}

MeetupForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }),
};

MeetupForm.defaultProps = {
  obj: initialState,
};

export default MeetupForm;
