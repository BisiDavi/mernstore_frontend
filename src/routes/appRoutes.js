import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  Layout,
  HomeScreen,
  ProductScreen,
  CartScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  ShippingScreen,
  PaymentScreen,
  PlaceOrderScreen,
  OrderScreen,
  UserListScreen,
  MerchantRegisterScreen,
  MerchantPayment,
  MerchantScreen,
  UserEditScreen,
  ProductListScreen,
  ProductEditScreen,
  OrderListScreen
} from '../imports';

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <main className="py-3">
          <Container>
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
            <Route
              path="/merchant-register"
              component={MerchantRegisterScreen}
            />
            <Route path="/merchant-payment" component={MerchantPayment} />
            <Route path="/merchant" component={MerchantScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
              exact
            />
            <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
