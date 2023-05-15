import React, { useContext } from "react";
import UserQuestion from "./UserQuestion";
import s from "../../css/UsersQuestionList.module.css";
import { useState } from "react";
import { fetchQuestionsTC } from "../../Redux/ActionCreators/questionAC";
import { fetchAnswersTC } from "../../Redux/ActionCreators/answerAC";
import { StoreContext } from "../..";
import { useEffect } from "react";

const UserQuestionList = (props) => {
  const store = useContext(StoreContext);

  const [userQuestions, setUserQuestions] = useState(null);
  const [userQuestionsCount, setUserQuestionsCount] = useState(null);

  const [userAnswers, setUserAnswers] = useState(null);
  const [userAnswersCount, setUserAnswersCount] = useState(null);

  const fetchQuestions = () => {
    store.dispatch(fetchQuestionsTC(null, null));
  };

  const fetchAnswers = () => {
    store.dispatch(fetchAnswersTC(null, null));
  };

  useEffect(() => {
    fetchQuestions();
    fetchAnswers();
  }, []);

  store.subscribe(() => {
    setUserQuestions(store.getState().questionPage.questions);
    setUserQuestionsCount(store.getState().questionPage.count);
    setUserAnswers(store.getState().answerPage.answers);
    setUserAnswersCount(store.getState().answerPage.count);
  });

  return (
    <div className={s.list_wrapper}>
      <span id={s.title}>Вопросы пользователей</span>
      <div className={s.items_container}>
        <span>Недавние</span>
        <span>Популярные</span>
        <span>Лучшие</span>
      </div>
      <hr />

      {userQuestions?.map((question) => (
        <UserQuestion key={question.id} question={question} />
      ))}
    </div>
  );
};

export default UserQuestionList;
