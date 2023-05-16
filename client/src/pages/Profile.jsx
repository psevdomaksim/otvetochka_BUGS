import React from "react";
import s from "../css/Profile.module.css";
import ava from "../img/ava.jpg";
//import ProfileComponent from "../components/Profile/ProfileComponent";
import { useContext } from "react";
import { StoreContext } from "..";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import { fetchOneUserTC } from "../Redux/ActionCreators/userAC";
import { BASE_URL } from "../utils/baseURL_const";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { EDIT_PROFILE_ROUTE } from "../utils/routes_consts";
import { fetchQuestionsTC } from "../Redux/ActionCreators/questionAC";
import { fetchAnswersTC } from "../Redux/ActionCreators/answerAC";

const Profile = (props) => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  const [curUser, setCurUser] = useState(null);

  const [userQuestions, setUserQuestions] = useState(null);
  const [userQuestionsCount, setUserQuestionsCount] = useState(null);

  const [userAnswers, setUserAnswers] = useState(null);
  const [userAnswersCount, setUserAnswersCount] = useState(null);

  const fetchUser = () => {
    store.dispatch(fetchOneUserTC(id));
  };

  const fetchUserQuestions = () => {
    store.dispatch(fetchQuestionsTC(null, id));
  };

  const fetchUserAnswers = () => {
    store.dispatch(fetchAnswersTC(null, id));
  };

  useEffect(() => {
    fetchUser();
    fetchUserQuestions();
    fetchUserAnswers();
  }, []);

  store.subscribe(() => {
    setCurUser(store.getState().userPage.currentUser);
    setUserQuestions(store.getState().questionPage.questions);
    setUserQuestionsCount(store.getState().questionPage.count);
    setUserAnswers(store.getState().answerPage.answers);
    setUserAnswersCount(store.getState().answerPage.count);
  });

  const formatDate = (propsDate) => {
    const date = new Date(Date.parse(propsDate));
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return date.toLocaleString("ru", options);
  };

  return (
    <div className={s.main_wrapper}>
      {/* Блок профиля и кол-во заданных вопросов (стата крч) */}
      <Container className={s.info_block}>
        <Row>
          {/* Профиль с возможностью редактирования */}
          <Col>
            <Container className={s.profile_block}>
              <Row>
                <Col className={s.profile_left_col}>
                  <Image
                    src={BASE_URL + `/${curUser?.avatarImage}`}
                    style={{ width: "150px", height: "150px" }}
                    roundedCircle
                  />
                  <p id={s.member_text}>
                    Участник проекта с {formatDate(curUser?.createdAt)}
                  </p>
                </Col>
              </Row>
              <div className={s.profile}>
                {store.getState().authPage.currentLogin?.id === +id ? (
                  <Link to={EDIT_PROFILE_ROUTE + `/${id}`}>
                    <Button variant="secondary">Редактировать профиль</Button>
                  </Link>
                ) : (
                  <></>
                )}
                <h2>{curUser?.fullname}</h2>
                <p>{curUser?.status}</p>
              </div>
            </Container>
          </Col>
          {/* Блок профиля КОНЕЦ */}

          {/* Блок с количеством вопросов */}
          <Col className={s.question_block}>
              <h3>Вопросов задано:</h3>
              <span id={s.number}>{userQuestionsCount}</span>
              <h3>Ответов написано:</h3>
              <span id={s.number}>{userAnswersCount}</span>
          </Col>
          {/* Блок с вопросами КОНЕЦ */}
        </Row>
      </Container>

      {/* Активность пользователя */}
      <div className={s.activity_block}>
        <h3>Активность пользователя</h3>
        <Container>
          <Row>
            <Col xs="2"><span className={s.active_span}>Вопросы</span></Col>
            <Col xs="2"><span>Ответы</span></Col>
          </Row>
        </Container>
    
      </div>
      <button
          id={s.button_up}
          type="button"
          className="btn btn-outline-success"
        >
          <i className="bi bi-chevron-up"></i>
        </button>
      {/* <button type="">Наверх</button> */}
    </div>
  );
};

export default Profile;
