import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FormContainer } from '../imports';

const MerchantApprovalPayment = ({ location, history }) => {
  return (
    <FormContainer>
      <h1>Thanks for choosing to be an approved merchant with Jumga</h1>
      <p>Things you stand to gain:</p>
      <ListGroup>
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

      <Button
        type="submit"
        href="https://ravesandbox.flutterwave.com/pay/n3pg2ywqirns"
        className="mt-3"
        variant="primary"
      >
        Make Payment: $20
      </Button>
    </FormContainer>
  );
};

export default MerchantApprovalPayment;
