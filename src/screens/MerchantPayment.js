import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Button, Spinner } from 'react-bootstrap';
import { merchantPayment } from '../actions/merchantActions';
import { FormContainer, Message } from '../imports';

const MerchantPayment = () => {
  const dispatch = useDispatch();
  const merchantSubscriptionState = useSelector(state => state.merchantPayment);
  const { loading, error, paymentLink } = merchantSubscriptionState;

  const makeSubscriptionPayment = () => dispatch(merchantPayment());
  console.log('paymentLink', paymentLink);

  return (
    <FormContainer>
      <h1>Thanks for choosing to be an approved merchant with Jumga</h1>
      <p>Things you stand to gain:</p>
      <ListGroup className="m-4">
        <ListGroup.Item>
          We accept payment in USD,Euro, NGN, Cedis and Kenya Shillings{' '}
        </ListGroup.Item>
      </ListGroup>
      <ListGroup>
        <ListGroup.Item>We offer reliable dispatcher Services.</ListGroup.Item>
      </ListGroup>
      {loading ? (
        <Button variant="primary" className="mt-3" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </Button>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Button
          type="submit"
          onClick={makeSubscriptionPayment}
          className="mt-3"
          variant="primary"
        >
          Make Payment: $20
        </Button>
      )}
    </FormContainer>
  );
};

export default MerchantPayment;
