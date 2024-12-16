import React from 'react'
import { Container, Row, Col, Form, Button, Card, CardBody } from 'react-bootstrap';

const Registration= () => {
  return (
    <>
      <Container>
                <Row className=' d-flex'>
                    <Col md={10}>
                    <Card className='mt-5'>
                        <CardBody>
                        <Form.Group>
                            <h1 className='text-center pt-3'>REGISTRATION FORM</h1>
                            <p className='pb-5'>Please enter your details to join us!</p>
                            <Row className='d-flex flex-row align-items-center justify-content-between'>
                            <Col md={4}> <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter Name'></Form.Control></Col>
                            <Col md={4}><Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'></Form.Control></Col>
                          <Col md={4}>  <Form.Label className=''>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password'></Form.Control>
                            </Col></Row>
                           
                            <Row className='d-flex flex-row align-items-center justify-content-between'>
                            <Col md={4}> <Form.Label className=''>Mobile</Form.Label>
                            <Form.Control  type='text' placeholder='Enter mobile'></Form.Control></Col>
                            <Col md={4}> <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={1} /></Col>
                            <Col md={4}> 
                            <Form.Select aria-label="Default select example">
                            <option>City</option>
                            <option value="1"></option>
                              <option value="2"></option>
                            <option value="3"></option>
                            </Form.Select></Col></Row>
                             <Row className='d-flex flex-row align-items-center justify-content-between'>
                             <Col md={4}>     
    <Form.Label>Gender </Form.Label>
    <Form.Check 
      type="radio" 
      inline label="Male" 
      name="gender" 
      id="gender-male" 
      value="male" 
    />
    <Form.Check 
      type="radio" 
     inline label="Female" 
      name="gender" 
      id="gender-female" 
      value="female" 
    /></Col>
  <Col md={4}>
    <Form.Label>Subject </Form.Label>
    
    <Form.Check inline label= "HTML"/>
          <Form.Check inline label="CSS"/>
         </Col>
         <Col md={4}>
         <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
         </Col>
          </Row>
                            <Button type='submit' className='btn btn-primary my-4 w-100'>Submit</Button>
                        </Form.Group>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </>
  )
}

export default Registration;
