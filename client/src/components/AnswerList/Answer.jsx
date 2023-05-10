import React from "react";
import s from "../../css/Answer.module.css"
import ava from "../../img/ava.jpg"

const Answer = (props) => {
  return (
    <div className={s.common_answer_block_wrapper}>
      <img className={s.ava} src={ava} />
      <p>Типа очень многоооооооооооооооооооооооооо текста</p>
      <p>Евгений Торгоня, 200 лет назад</p>
    </div>
  );
};

export default Answer;
