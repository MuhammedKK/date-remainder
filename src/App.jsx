import React, {useState} from 'react';
import {Container} from 'react-bootstrap'
import { Person } from './API/data';
import DatesCount from './components/DatesCount';
import DatesList from './components/DatesList';
import DatesHandlers from './components/DatesHandlers';
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
          <DatesCount count={users?.length} />
          <DatesList usersInfo={users} />
          <DatesHandlers 
            deleteUsers={deleteAll}
            viewUsers={ViewAll} 
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
