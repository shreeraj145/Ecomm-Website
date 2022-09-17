import React from 'react'
import {Container,Navbar, Nav} from "react-bootstrap"


const Header = () => {
  return (
    <header>
       <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect> 
      <Container>
        <Navbar.Brand href="/">EShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart" className='fa-solid fa-cart-shopping'>Cart</Nav.Link>
            <Nav.Link href="/login" className='fa fa-user'>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
