import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

const ListUserScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/api/users');
      // const { data } = await fetch('/api/users');
      console.log('fetchUsers called', data);
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <Container>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone_number}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );

  {
    /* <div> {users.map((e) => e.first_name)}</div>; */
  }
};

export default ListUserScreen;
