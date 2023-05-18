import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import UsersModal from "../modals/UsersModal";


const Admin = (props) => {


  const [userVisible, setUsersVisible] = useState(false);

  return (
      <Container className="d-flex flex-column mt-2">
            <Button variant="success" className="mt-3 p-2" onClick={()=> setUsersVisible(true)}>Пользователи</Button>
            <UsersModal show={userVisible} onHide={() => setUsersVisible(false)}/>
        </Container>
  );
};

export default Admin;
