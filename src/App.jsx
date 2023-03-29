import React, {useEffect, useState} from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import { Person } from './data';
const App = () => {

  // User data State
  const [users, setUsers] = useState(Person)
  // const [user, setUser] = useState()
  console.log(users)

  // Handle Remove All Dates
  const deleteAll = () => {
    setUsers([]);
  }
  const ViewAll = () => {
    setUsers(Person);
  }

  const addUser = () => {
    // setUser(newPer);
    
  }
  return (
    <div className="App">
      <div className="color-body my-5">
        <Container>
          <Row className='dates-count justify-content-center'>
            <Col sm='8'>
              You Have Dates = {users?.length}
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col sm='8' className="py-5">
              <div className="rect">
                {users?.map((item) => {
                  return (
                    <div key={item.id} className="item d-flex justify-content-between p-3 bg-primary my-3" style={{color:"white"}}>
                      <img className='img-avatar' src={item.avatar} alt="" />
                      <div className="px-3">
                        <p className='d-inline fs-5'>{item.username}</p>
                        <p>{item['date-opp']}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Button onClick={deleteAll} className='btn-style mx-2'>Delete All</Button>
              <Button onClick={addUser} className='btn-style mx-2'>Add User</Button>
              <Button onClick={ViewAll} className='btn-style'>Show All</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
