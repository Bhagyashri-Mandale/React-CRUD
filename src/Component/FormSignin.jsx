import React from 'react';
import { Container, Row, Col, Form, Button, Card, CardBody } from 'react-bootstrap';

const FormSignin = () => {
    return (
        <>
            <Container>
                <Row className=' d-flex justify-content-center'>
                    <Col md={10}>
                    <Card className='mt-5'>
                        <CardBody>
                        <Form>
                            <h1 className='text-center pt-3'>SIGN IN</h1>
                            <p className='pb-5'>Please enter your details to join us!</p>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'></Form.Control>
                            <Form.Label className='pt-4'>Password</Form.Label>
                            <Form.Control className='' type='password' placeholder='Password'></Form.Control>
                            <Button type='submit' className='btn btn-primary my-4 w-100'>Sign In</Button>
                        </Form>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FormSignin;
