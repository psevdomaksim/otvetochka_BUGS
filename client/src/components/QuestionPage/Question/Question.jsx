import React from "react";
import ava from "../../../img/ava.jpg"
import like from "../../../img/like.png"
import zerolike from "../../../img/zerolike.png"
import s from "../../../css/Question.module.css"

const Question = (props) => {
    return (
        <div className={s.question_wrapper}>
            <img className={s.ava} src={ava} />
            <h3>Почему все любят капибар?</h3>
            <p>Подробности вопроса. Очееееееееееееееееень много текста</p>
            <span>Максим Варвашевич, 200 лет назад</span>
            <img src={like} />
            <img src={zerolike} />
        </div>
    )
}

export default Question;