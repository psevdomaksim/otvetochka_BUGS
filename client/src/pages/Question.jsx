import React from "react";
import s from "../css/QuestionPage.module.css";
import AnswerList from "../components/AnswerList/AnswerList";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "..";
import { useEffect } from "react";
import { fetchOneQuestionTC } from "../Redux/ActionCreators/questionAC";
import { fetchAnswersTC } from "../Redux/ActionCreators/answerAC";
import { useState } from "react";
import UserQuestion from "../components/UsersQuestions/UserQuestion";

const Question = (props) => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  const [curQuestion, setCurQuestion] = useState(null);

  const [questionAnswers, setQuestionAnswers] = useState(null);
  const [questionAnswersCount, setQuestionAnswersCount] = useState(null);

  const fetchQuestion = () => {
    store.dispatch(fetchOneQuestionTC(id));
  };

  const fetchQuestionAnswers = () => {
    store.dispatch(fetchAnswersTC(id, null));
  };

  useEffect(() => {
    fetchQuestion();
    fetchQuestionAnswers();
  }, []);

  store.subscribe(() => {
    setCurQuestion(store.getState().questionPage.curQuestion);
    setQuestionAnswers(store.getState().answerPage.answers)
    setQuestionAnswersCount(store.getState().answerPage.count)
  });



  return (
    <div>
      <div className={s.wrapper}>
        
        <UserQuestion key={curQuestion?.id} answersCount={questionAnswersCount} question={curQuestion} />


      
        <div className={s.textarea_wrapper}>
          <textarea
            className={s.textarea}
            placeholder="Напишите что-нибудь"
          ></textarea>
          <button>Отправить</button>
        </div>
        <div className={s.users_question_wrapper}>
          <h3>Ответы пользователей</h3>
          <AnswerList answers={questionAnswers}/>
        </div>
      </div>
    </div>
  );
};

export default Question;
