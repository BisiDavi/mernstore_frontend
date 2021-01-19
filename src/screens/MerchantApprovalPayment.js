import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Button, Spinner, Form, Row, Col } from 'react-bootstrap';
import { MerchantSubscriptionPayment } from '../actions/merchantActions';
import { FormContainer, Message } from '../imports';

const MerchantApprovalPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(20);
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();
  const merchantSubscriptionPayment = useSelector(
    state => state.merchantSubscription
  );
  const { loading, error } = merchantSubscriptionPayment;

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      MerchantSubscriptionPayment(
        cardNumber,
        cvv,
        expiryMonth,
        expiryYear,
        currency,
        amount,
        email,
        fullname,
        phoneNumber
      )
    );
  };

  return (
    <FormContainer>
      <h1>Thanks for choosing to be an approved merchant with Jumga</h1>
      <p>Things you stand to gain:</p>
      <ListGroup className="m-4">
        <ListGroup.Item>
          We accept payment in USD,Euro, NGN, Cedis and Kenya Shillings{' '}
        </ListGroup.Item>
        <ListGroup.Item>We remit customers payment quickly</ListGroup.Item>
        <ListGroup.Item>
          We have large database of registered users ready to buy your product.
        </ListGroup.Item>
        <ListGroup.Item>
          We only receive 2.5% as commission from the sales of your product
        </ListGroup.Item>
        <ListGroup.Item>We offer reliable dispatcher Services.</ListGroup.Item>
      </ListGroup>
      <Form>
        <Row onSubmit={submitHandler}>
          <Col lg={6}>
            <Form.Group controlId="fullname">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="string"
                placeholder="Full name"
                value={fullname}
                onChange={e => setFullname(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group controlId="phone_number">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="string"
                placeholder="phone number"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group controlId="cardnumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="card number"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="number"
                placeholder="cvv"
                value={cvv}
                onChange={e => setCvv(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group controlId="expiry_month">
              <Form.Label>Expiry Month</Form.Label>
              <Form.Control
                type="number"
                placeholder="01"
                value={expiryMonth}
                onChange={e => setExpiryMonth(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group controlId="expiry_month">
              <Form.Label>Expiry Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="05"
                value={expiryYear}
                onChange={e => setExpiryYear(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group controlId="currency">
              <Form.Label>Currency</Form.Label>
              <Form.Control
                type="string"
                placeholder="USD"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="20"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {loading ? (
          <Button variant="primary" className="mt-3" disabled>
            <Spinner
              as="Row"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <Row className="sr-only">Loading...</Row>
          </Button>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Button type="submit" className="mt-3" variant="primary">
            Make Payment
          </Button>
        )}
      </Form>
    </FormContainer>
  );
};

export default MerchantApprovalPayment;
