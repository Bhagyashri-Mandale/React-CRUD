import React,{ useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
const View = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    showUsers()
  }, [])

  const showUsers = () => {
    axios.get('http://localhost:8000/findall')
      .then(res => {
        setUserData(res.data.userData)
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <>
    <Container>
      <Row>
        <Col md={12}>
    <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th> Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>City</th>
          <th>Gender</th>
          <th>Subject</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
              {userData.map((a, id) => {
                return (
                  <tr>
                    <td>{id + 1}</td>
                    <td>{a.fname}</td>
                    <td>{a.email}</td>
                    <td>{a.mobile}</td>
                  </tr>
                )
              })}
            </tbody>
    </Table>
    </Col>
    </Row>
    </Container>
    </>
      
    
  )
}

export default View;
