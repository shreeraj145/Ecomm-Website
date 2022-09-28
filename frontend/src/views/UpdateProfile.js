import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.js";
import { getUserDetails, updateUserProfile } from "../actions/userActions";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success, updateError } = userUpdateProfile;
  console.log(updateError);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
      navigate("/profile");
    }
  };

  return (
    <Row>
      <Col>
        <h2>Edit Profile</h2>
        {message && <Alert variant="danger">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        {updateError && <Alert variant="danger">{updateError}</Alert>}
        {success && (
          <Alert variant="success">Profile Updated Succesfully</Alert>
        )}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="my-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email" className="my-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="my-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword" className="my-2">
            <Form.Label>confirm Password</Form.Label>
            <Form.Control
              type="Password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Row>
            <Col md={2}>
              <Button type="submit" variant="dark" className="my-2">
                Update
              </Button>
            </Col>
            <Col md={2}>
              <Link to={"/profile"} className=" btn btn-dark" id="GoBackBtn">
                Go Back
              </Link>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdateProfile;
