import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Container,
  Navbar,
  Nav,
  Span,
  NavDropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>EShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {cartItems.length === 0 ? (
                <LinkContainer to="/cart">
                  <Nav.Link className="fa-solid fa-cart-shopping d-flex align-self-baseline">
                    Cart
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/cart" id="cart">
                  <Nav.Link className="fa-solid fa-cart-shopping">
                    Cart
                    <Badge pill bg="secondary" id="badge">
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </Badge>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login" id="login">
                  <Nav.Link href="/login" className="fa fa-user">
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
