/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMember, updateMember } from '../../api/memberData';
// import { getMeetups } from '../../api/meetupData';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  imageUrl: '',
};

function MemberForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [members, setMembers] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) setFormInput(obj);
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
    console.warn(formInput);
    if (obj.id) {
      updateMember(formInput)
        .then(() => router.push('/members'));
    } else {
      const payload = { ...formInput, uid: user.uid, organizationId: 1 };
      console.log('member payload:', payload);
      createMember(payload)
        .then(() => {
          router.push('/members');
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Member</h2>

      {/* firstName INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Member's First Name"
          name="firstName"
          value={formInput.firstName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* lastName INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Member's Last Name"
          name="lastName"
          value={formInput.lastName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Member Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="imageUrl"
          value={formInput.imageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Email INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Phone INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Phone Number" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Phone Number"
          name="phone"
          value={formInput.phone}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Meetup SELECT
      <FloatingLabel controlId="floatingSelect" label="Meetup">
        <Form.Select
          aria-label="Meetup"
          name="meetup_id"
          onChange={handleChange}
          className="mb-3"
          value={formInput.meetup_id}
          required
        >
          <option value="">Select a Meetup</option>
          {
            meetups.map((meetup) => (
              <option
                key={meetup.firebaseKey}
                value={meetup.firebaseKey}
              >
                {meetup.meetup_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel> */}

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Member</Button>
    </Form>
  );
}

MemberForm.propTypes = {
  obj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }),
};

MemberForm.defaultProps = {
  obj: initialState,
};

export default MemberForm;
