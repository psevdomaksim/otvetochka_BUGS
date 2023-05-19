import React, { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { StoreContext } from "..";
import AnswerReportsModal from "../modals/AnswerReportsModal";
import QuestionReportsModal from "../modals/QuestionReportsModal";

import UsersModal from "../modals/UsersModal";
import { HOME_PAGE_ROUTE } from "../utils/routes_consts";


const Admin = () => {
  const store = useContext(StoreContext);

  const [usersVisible, setUsersVisible] = useState(false);
  const [questionReportsVisible, setQuestionReportsVisible] = useState(false);
  const [answerReportsVisible, setAnswerReportsVisible] = useState(false);

  if (store.getState().authPage.currentLogin.role==="USER") {
    return <Navigate to={HOME_PAGE_ROUTE} />;
  }


  return (
      <Container className="d-flex flex-column mt-2" style={{minHeight:"20.5em"}}>
            <Button variant="success" className="mt-3 p-2" onClick={()=> setUsersVisible(true)}>Пользователи</Button>
            <Button variant="success" className="mt-3 p-2" onClick={()=> setQuestionReportsVisible(true)}>Жалобы на вопросы</Button>
            <Button variant="success" className="mt-3 p-2" onClick={()=> setAnswerReportsVisible(true)}>Жалобы на ответы</Button>

            <UsersModal show={usersVisible} onHide={() => setUsersVisible(false)}/>
            <QuestionReportsModal show={questionReportsVisible} onHide={() => setQuestionReportsVisible(false)}/>
            <AnswerReportsModal show={answerReportsVisible} onHide={() => setAnswerReportsVisible(false)}/>
        </Container>
  );
};

export default Admin;
