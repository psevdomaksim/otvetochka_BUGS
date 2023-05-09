import React from "react";
import s from "../../css/QuestionPage.module.css";
import AnswerList from "./AnswerList/AnswerList";
import Question from "./Question/Question";

const QuestionPage = (props) => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.question_wrapper}>
          <Question />
        </div>
        <div className={s.textarea_wrapper}>
            <textarea className={s.textarea} placeholder="Напишите что-нибудь"></textarea>
            <button>Отправить</button>
        </div>
        <div className={s.users_question_wrapper}>
          <h3>Ответы пользователей</h3>
          <AnswerList />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
