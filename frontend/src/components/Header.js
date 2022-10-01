import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
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
                <Nav.Link href="/cart" id="cartContainer">
                  {/* <Nav.Link className="fa-solid fa-cart-shopping d-flex align-self-baseline">
                    Cart
                  </Nav.Link> */}
                  Cart
                </Nav.Link>
              ) : (
                <Nav.Link href="/cart" id="cartContainerBadg">
                  {/* <Nav.Link className="fa-solid fa-cart-shopping" id="cart">
                    Cart
                    <Badge id="badge" bg="secondary">
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </Badge>
                  </Nav.Link> */}
                  cart
                  <Badge id="badge" bg="secondary">
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  </Badge>
                </Nav.Link>
              )}
              {userInfo ? (
                <NavDropdown title={userInfo.name.split(" ")[0]} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login" id="login">
                  {/* <Nav.Link href="/login" className="fa fa-user">
                    Sign In
                  </Nav.Link> */}
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
