import React from "react";
import ava from "../../img/ava.jpg";
import s from "../../css/AnswerList.module.css";
import Answer from "./Answer";

const AnswerList = (props) => {
  return (
    <div>
      <div className={s.best_answer_block_wrapper}>
        <h3>Лучший ответ</h3>
        <img className={s.ava} src={ava} />
        <p>Типа очень многоооооооооооооооооооооооооо текста</p>
        <p>Сергей Нечаев, 10 минут назад</p>
      </div>
      <Answer />
    </div>
  );
};

export default AnswerList;
