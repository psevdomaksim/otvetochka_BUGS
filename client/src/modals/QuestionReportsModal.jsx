import React, { useState, useContext, useEffect } from "react";

import { Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "..";
import {
  deleteReportTC,
  fetchAllReportsTC,
  fetchQuestionReportsTC,
} from "../Redux/ActionCreators/reportAC";
import { PROFILE_ROUTE, QUESTION_PAGE_ROUTE } from "../utils/routes_consts";

const QuestionReportsModal = ({ show, onHide }) => {
  const store = useContext(StoreContext);
  const [questionReports, setQuestionReports] = useState([]);

  const fetchQuestionReports = () => {
    store.dispatch(fetchQuestionReportsTC());
  };

  const deleteReport = (id) => {  
      store.dispatch(deleteReportTC(id));
  };

  useEffect(() => {
    fetchQuestionReports();
  }, []);

  store.subscribe(() => {
    setQuestionReports(store.getState().reportPage.questionReports);
  });

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Жалобы на вопросы
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
          {questionReports.map((report) => (
            <tbody key={report.question.id}>
              <tr>
                <td>{report.id}</td>
                <td>
                  <Link
                    style={{ color: "black" }}
                    to={QUESTION_PAGE_ROUTE + `/${report.question.id}`}
                  >
                    {report.question.id}
                  </Link>
                </td>
                <td>{report.question.title}</td>
                <td>
                  <Link
                    style={{ color: "black" }}
                    to={PROFILE_ROUTE + `/${report.question.user.id}`}
                  >
                    {report.question.user.email}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: "black" }}
                    to={PROFILE_ROUTE + `/${report.user.id}}`}
                  >
                    {report.user.email}
                  </Link>
                </td>
                <td
                  className="bi bi-trash3-fill m-auto"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteReport(report.id)}
                ></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default QuestionReportsModal;
