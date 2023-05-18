import React, { useState, useContext, useEffect } from "react";
import { useRef } from "react";
import { Modal, Table } from "react-bootstrap";
import { StoreContext } from "..";
import { fetchUsersTC } from "../Redux/ActionCreators/userAC";

const UsersModal = ({ show, onHide }) => {
  const store = useContext(StoreContext);

  const [allUsers, setAllUsers] = useState([]);

  const [limit, setLimit] = useState(store.getState().questionPage?.limit);
  const [page, setPage] = useState(1);
  const [loadData, setLoadData] = useState(true);

  const observer = useRef(null);

  const fetchAllUsers = () => {
    setLoadData(true);
    store.dispatch(fetchUsersTC(limit, page));
    setLoadData(false);
  };

  store.subscribe(() => {
    setAllUsers(store.getState().userPage.allUsers);
  });

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Пользователи
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>№</th>
              <th>Email</th>

              <th>Role</th>
              <th></th>
            </tr>
          </thead>
           {allUsers.map((user) => (
            <tbody key={user.id}>
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td
                  className="bi bi-trash3-fill m-auto"
                
                ></td>
              </tr>
            </tbody>
          ))} 
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default UsersModal;
