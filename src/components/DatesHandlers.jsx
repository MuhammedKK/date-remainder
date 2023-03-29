import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const DatesHandlers = ({deleteUsers, viewUsers}) => {
  return (
    <Row>
        <Col className='d-flex justify-content-center'>
        <Button onClick={deleteUsers} className='btn-style mx-2'>Delete All</Button>
        {/* <Button onClick={addUser} className='btn-style mx-2'>Add User</Button> */}
        <Button onClick={viewUsers} className='btn-style'>Show All</Button>
        </Col>
    </Row>
  )
}

export default DatesHandlers