import React from 'react'
import { Button, Container, Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
      <Container >
        <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="Registration" className='text-decoration-none'><Nav.Link href="registrationForm" className='text-white'>Register</Nav.Link></Link>
            <Link to="View" className='text-decoration-none'><Nav.Link href="View" className='text-white text-decoration-none'>View</Nav.Link></Link>
           
          </Nav>
          <Button type='button'className='btn btn-dark text-white d-flex justify-content-end' href='FormSignin'>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Home
