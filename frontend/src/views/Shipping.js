import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/saveShipping.js";
import { CheckoutSteps } from "../components/CheckoutSteps.js";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate();
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      event.preventDefault();
      dispatch(saveShippingAddress({ address, city, postalCode, country }));
      navigate("/payment");
    }
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter City
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="postalCode" className="my-2">
          <Form.Label>postalCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter postalCode"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter Postalcode
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter Country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter country
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Shipping;
