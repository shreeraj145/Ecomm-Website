import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home.js";
import Product from "./views/Product.js";
import Cart from "./views/Cart.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import Profile from "./views/Profile";
import UpdateProfile from "./views/UpdateProfile";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<UpdateProfile />} />
            <Route path="/cart" element={<Cart />}>
              <Route path=":id" element={<Cart />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
