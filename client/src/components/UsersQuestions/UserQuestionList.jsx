import React, { useContext } from "react";
import UserQuestion from "./UserQuestion";
import s from "../../css/UsersQuestionList.module.css";
import { useState } from "react";
import { fetchQuestionsTC } from "../../Redux/ActionCreators/questionAC";
import { fetchAnswersTC } from "../../Redux/ActionCreators/answerAC";
import { StoreContext } from "../..";
import { useEffect } from "react";
import { useRef } from "react";

const UserQuestionList = (props) => {
  const store = useContext(StoreContext);
  const [userQuestions, setUserQuestions] = useState(null);

  const [limit, setLimit] = useState(store.getState().questionPage?.limit);
  const [page, setPage] = useState(1);
  const [loadData, setLoadData] = useState(true);

  const observer = useRef(null);

  const fetchQuestions = () => {
    setLoadData(true);
    store.dispatch(fetchQuestionsTC(null, null, limit, page));
    setLoadData(false);
  };

  const fetchProfileQuestions = () => {
    setLoadData(true);
    store.dispatch(fetchQuestionsTC(null, props.id, limit, page));
    setLoadData(false);
  };

  useEffect(() => {
      if (!props.profileQuestions) {
        fetchQuestions();
      }

      if (props.profileQuestions) {
        fetchProfileQuestions();
      }
  }, [page]);

  useEffect(() => {
    if (!props.trigger && loadData && !page) return;
    if (observer.current) observer.current.disconnect();
    if (page > limit) return;
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setPage((page) => page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(props.trigger.current);
  }, []);

  useEffect(() => {
    if (!props.profileQuestions && !props.profileAnswers) {
      fetchQuestions();
    }

    if (props.profileQuestions && props.profileAnswers) {
      fetchProfileQuestions();
    }
  }, []);

  store.subscribe(() => {
    setUserQuestions(store.getState().questionPage.questions);
  });

  return (
    <div className={s.list_wrapper}>
      <span id={s.title}>Вопросы пользователей</span>
      <div className={s.items_container}>
        <span>Недавние</span>
      </div>

      {userQuestions?.map((question) => (
        <UserQuestion question={question} />
      ))}
    </div>
  );
};

export default UserQuestionList;
