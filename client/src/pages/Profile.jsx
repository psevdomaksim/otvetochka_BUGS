import React from "react";
import s from "../css/Profile.module.css";
import ava from "../img/ava.jpg";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { useContext } from "react";
import { StoreContext } from "..";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import { fetchOneUserTC } from "../Redux/ActionCreators/userAC";
import { BASE_URL } from "../utils/baseURL_const";
import { Button, Image } from "react-bootstrap";
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
    setUserQuestions(store.getState().questionPage.questions)
    setUserQuestionsCount(store.getState().questionPage.count)
    setUserAnswers(store.getState().answerPage.answers)
    setUserAnswersCount(store.getState().answerPage.count)
  });

  const formatDate = (propsDate) => {
    const date = new Date(Date.parse(propsDate));
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    return date.toLocaleString("ru", options);
}

  return (
    <div className={s.main_wrapper}>
      {/* Блок профиля и кол-во заданных вопросов (стата крч) */}
      <div className={s.info_block}>
        {/* Профиль с возможностью редактирования */}
        <div className={s.profile_block}>
          <Image
            src={BASE_URL + `/${curUser?.avatarImage}`}
            style={{ width: "150px", height: "150px" }}
            roundedCircle
          />

          <div className={s.profile}>
            {store.getState().authPage.currentLogin.id === +id ? (
              <Link to={EDIT_PROFILE_ROUTE + `/${id}`}>
                <Button>Редактировать профиль</Button>
              </Link>
            ) : (
              <></>
            )}

            <h2>{curUser?.fullname}</h2>
            <p>{curUser?.status}</p>
          </div>
          <div>
            <p>Участник проекта с {formatDate(curUser?.createdAt)}</p>
          </div>
        </div>

        {/* Блок с количеством вопросов */}
        <div className={s.question_block}>
          <h3>Вопросов задано:</h3>
          <span>{userQuestionsCount}</span>
          <h3>Ответов написано:</h3>
          <span>{userAnswersCount}</span>
        </div>
      </div>

      {/* Активность пользователя */}
      <div className={s.activity_block}>
        <h3>Активность пользователся</h3>
        <div>
          <span>Вопросы</span>
          <span>Ответы</span>
        </div>
        <ProfileComponent />
      </div>
      <button type="">Наверх</button>
    </div>
  );
};

export default Profile;
