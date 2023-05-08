import React from "react";
import s from "../../css/QuestionPage.module.css";
import AnswerBlock from "./AnswerBlock/AnswerBlock";
import CommentForm from "./Comment/CommentForm";
import Question from "./Question/Question";

const QuestionPage = (props) => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.question_wrapper}>
          <Question />
        </div>
        <CommentForm />
        <div className={s.users_question_wrapper}>
          <h3>Ответы пользователей</h3>
          <AnswerBlock />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
