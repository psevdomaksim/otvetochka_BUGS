import React from "react";
import s from "../css/QuestionPage.module.css";
import AnswerList from "../components/AnswerList/AnswerList";
import QuestionComponent from "../components/Question/Question";

const Question = (props) => {
  return (
    <div>
      <div className={s.wrapper}>
         <div className={s.question_wrapper}>
          <QuestionComponent />
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

export default Question;
