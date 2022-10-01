import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Row>
        <Col md={3}>
          <Nav.Item>
            {step1 ? (
              <LinkContainer to="/login">
                <Nav.Link>
                  <strong>Sign In</strong>
                </Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link disabled>
                <strong>Sign In</strong>
              </Nav.Link>
            )}
          </Nav.Item>
        </Col>
        <Col md={3}>
          <Nav.Item>
            {step2 ? (
              <LinkContainer to="/shipping">
                <Nav.Link>
                  <strong>Shipping</strong>
                </Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link disabled>
                <strong>Shipping</strong>
              </Nav.Link>
            )}
          </Nav.Item>
        </Col>
        <Col md={3}>
          <Nav.Item>
            {step3 ? (
              <LinkContainer to="/payment">
                <Nav.Link>
                  <strong>Payment</strong>
                </Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link disabled>
                <strong>Payment</strong>
              </Nav.Link>
            )}
          </Nav.Item>
        </Col>
        <Col md={3}>
          <Nav.Item id="place-order">
            {step4 ? (
              <LinkContainer to="/placeorder">
                <Nav.Link>
                  <strong>Place Order</strong>
                </Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link disabled>
                <strong>Place Order</strong>
              </Nav.Link>
            )}
          </Nav.Item>
        </Col>
      </Row>
    </Nav>
  );
};

export { CheckoutSteps };
