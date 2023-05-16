import React from "react";
import s from "../../css/AnswerList.module.css";
import Answer from "./Answer";

const AnswerList = (props) => {
  return (
    <div>
      <div className={s.best_answer_block_wrapper}>
        <h3>Лучший ответ</h3>
        <Answer key={props.bestAnswer?.id} bestAnswer={props.bestAnswer} />
      </div>
      {props.answers?.map((answer) => (
        <Answer key={answer.id} answer={answer} />
      ))}
    </div>
  );
};

export default AnswerList;
