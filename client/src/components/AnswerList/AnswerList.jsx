import React from "react";
import s from "../../css/AnswerList.module.css";
import Answer from "./Answer";

const AnswerList = (props) => {
  return (
    <div>
      <div className={s.best_answer_block_wrapper}>
        <h3>Лучший ответ</h3>
        {
          props.bestAnswer ? <Answer key={props.bestAnswer?.id} answer={props.bestAnswer} /> :
          <>Ответов пока нету</>
        }
       
      </div>
      {props.answers?.map((answer) => (
        <Answer key={answer.id} answer={answer} />
      ))}
    </div>
  );
};

export default AnswerList;
