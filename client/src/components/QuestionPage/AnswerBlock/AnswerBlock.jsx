import React from "react";
import ava from "../../../img/ava.jpg";
import like from "../../../img/like.png"
import zerolike from "../../../img/zerolike.png"
import s from "../../../css/AnswerBlock.module.css";

const AnswerBlock = (props) => {
  return (
    <div>
      <div className={s.best_answer_block_wrapper}>
        <h3>Лучший ответ</h3>
        <img className={s.ava} src={ava} />
        <p>Типа очень многоооооооооооооооооооооооооо текста</p>
        <p>Сергей Нечаев, 10 минут назад</p>
        <img src={like} />
      </div>
      <div className={s.common_answer_block_wrapper}>
        <img className={s.ava} src={ava} />
        <p>Типа очень многоооооооооооооооооооооооооо текста</p>
        <p>Евгений Торгоня, 200 лет назад</p>
        <img src={zerolike} />
      </div>
      <div className={s.common_answer_block_wrapper}>
        <img className={s.ava} src={ava} />
        <p>Типа очень многоооооооооооооооооооооооооо текста</p>
        <p>Евгений Торгоня, 200 лет назад</p>
        <img src={zerolike} />
      </div>
    </div>
  );
};

export default AnswerBlock;
