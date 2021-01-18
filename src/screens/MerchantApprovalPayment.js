import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FormContainer } from '../imports';

const MerchantApprovalPayment = ({ location, history }) => {
  const merchantLogin = useSelector(state => state.merchantLogin);
  const { merchantInfo } = merchantLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (merchantInfo) {
      history.push(redirect);
    }
  }, [history, merchantInfo, redirect]);

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

      <Button type="submit" className="mt-3" variant="primary">
        Make Payment: $20
      </Button>
    </FormContainer>
  );
};

export default MerchantApprovalPayment;
