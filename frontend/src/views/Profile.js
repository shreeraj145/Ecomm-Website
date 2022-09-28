import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, Alert, Nav, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.js";
import { getUserDetails } from "../actions/userActions";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success, updateError, updatedUserInfo } = userUpdateProfile;
  console.log(updatedUserInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else if (updatedUserInfo) {
        setName(updatedUserInfo.name);
        setEmail(updatedUserInfo.email);
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  console.log(name);
  return (
    <Row>
      <Col md={5}>
        {loading && <Loader />}
        {success && (
          <Alert variant="success">Profile Updated Succesfully</Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        {updateError && <Alert variant="danger">{updateError}</Alert>}

        <Row>
          <Col md={10} sm={10} xs={10}>
            <p className="h2">User Profile</p>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <Link to={"/profile/edit"} className="fw-semibold btn btn-light">
              <Nav.Link
                to="/profile/edit"
                className="fa-solid fa-pen-to-square"
              ></Nav.Link>
            </Link>
          </Col>
        </Row>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Name:</strong> {name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {email}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={7}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default Profile;
