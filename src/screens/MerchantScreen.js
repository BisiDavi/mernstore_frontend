import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


export const MerchantScreen = () => {
  
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Container fluid>
      <Row>
        <Col>Hello Merchant </Col>
        <Col>You have been assigned a dispatcher to your ensure safe delivery of ordered items</Col>
      </Row>
    </Container>
  );
};

export default MerchantScreen;
