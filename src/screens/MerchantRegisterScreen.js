import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { FormContainer, Notify } from '../imports';

const MerchantRegisterScreen = ({ location, history }) => {
  const userRegister = useSelector(state => state.userRegister);
  const { userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <FormContainer>
      <Notify
        text="Dear Merchant, you need to make a payment of $20 to become an approved merchant of Jumga store"
      />
      <h1>Become A Merchant</h1>

      {userInfo ? (
        <Button>Make Payment: $20</Button>
      ) : (
        <h3>
          To Become a <b>Merchant</b> your have to{' '}
          <b>Register as a User first.</b>
        </h3>
      )}
      <Row className="py-3">
        <Col>
          Register as a user{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            <u variant="text-primary">RegisterUser</u>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default MerchantRegisterScreen;
