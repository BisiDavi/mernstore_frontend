import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Message, Loader, FormContainer, Notify } from '../imports';
import { register } from '../actions/merchantActions';

const MerchantRegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const merchantRegister = useSelector(state => state.merchantRegister);
  const { loading, error, merchantInfo } = merchantRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (merchantInfo) {
      history.push(redirect);
    }
  }, [history, merchantInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, businessName, businessAddress, password));
    }
  };

  return (
    <FormContainer>
      <Notify text="Dear Merchant, you need to make a payment of $20 to become an approved merchant of Jumga store" />
      <h1>Become A Merchant</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
         required ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          required></Form.Control>
        </Form.Group>

        <Form.Group controlId="businessname">
          <Form.Label>Business / Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Company's name"
            value={businessName}
            onChange={e => setBusinessName(e.target.value)}
          required></Form.Control>
        </Form.Group>

        <Form.Group controlId="businessAddress">
          <Form.Label>Business / Company Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Business Location"
            value={businessAddress}
            onChange={e => setBusinessAddress(e.target.value)}
          required></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          required></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          required></Form.Control>
        </Form.Group>        

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have a Merchant Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default MerchantRegisterScreen;
