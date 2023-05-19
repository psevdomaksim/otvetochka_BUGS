import React, { useState, useContext, useEffect } from "react";

import { Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "..";
import { deleteReportTC, fetchAnswerReportsTC } from "../Redux/ActionCreators/reportAC";
import { PROFILE_ROUTE } from "../utils/routes_consts";


const AnswerReportsModal = ({ show, onHide }) => {
  const store = useContext(StoreContext);
  const [answerReports, setAnswerReports] = useState([]);

  const fetchAnswerReports = () => {
    store.dispatch(fetchAnswerReportsTC());;
  };

  const deleteReport = (id) => {
    store.dispatch(deleteReportTC(id));;
  };


  useEffect(() => {
    fetchAnswerReports();
}, []);

  store.subscribe(() => {
    setAnswerReports(store.getState().reportPage.answerReports);
  });

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Жалобы на ответы
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Жалоба №</th>
              <th>Вопрос №</th>
              <th>Заголовок</th>            
              <th>Автор вопроса</th>
              <th>Автор жалобы</th>
              <th></th>
            </tr>
          </thead>
           {answerReports.map((report) => (
            <tbody key={report.answer.id}>
              <tr>
              <td>{report.id}</td>
                <td>{report.answer.id}</td>
                <td>{report.answer.body}</td>
                <td><Link style={{color:"black"}} to={PROFILE_ROUTE + `/${report.answer.user.id}`}>{report.answer.user.email}</Link></td>
                <td><Link style={{color:"black"}} to={PROFILE_ROUTE + `/${report.user.id}}`}>{report.user.email}</Link></td>
                <td
                  className="bi bi-trash3-fill m-auto" 
                  style={{cursor:"pointer"}}
                  onClick={()=>deleteReport(report.id)}            
                ></td>
              </tr>
            </tbody>
          ))}  
      
        </Table>

      </Modal.Body>
    </Modal>
  );
};

export default AnswerReportsModal;
