import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
const AddUserScreen = ({ history }) => {
  const [first_name, setFname] = useState('');
  const [last_name, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone_number, setPnumber] = useState('');
  const [address, setAddress] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users',
      {
        first_name,
        last_name,
        email,
        gender,
        phone_number,
        address,
      },
      config
    );
    history.push('/users');
  };
  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter First Name'
            value={first_name}
            onChange={(e) => setFname(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Last Name'
            value={last_name}
            onChange={(e) => setLname(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter First Name'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Phone Number'
            value={phone_number}
            onChange={(e) => setPnumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='Submit' variant='primary'>
          Add User
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddUserScreen;
