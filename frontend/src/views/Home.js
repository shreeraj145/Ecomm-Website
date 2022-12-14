import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Alert } from "react-bootstrap";
import Product from "../components/Product.js";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { listProducts } from "../actions/productActions.js";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Gadgets</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>
          <Alert variant="danger">{error}</Alert>
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm="12" md="6" lg="4" xl="3">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
