import React from "react";
import ava from "../../img/ava.jpg"
import s from "../../css/Question.module.css"

const QuestionComponent = (props) => {
    return (
        <div className={s.question_wrapper}>
            <img className={s.ava} src={ava} />
            <h3>Почему все любят капибар?</h3>
            <p>Подробности вопроса. Очееееееееееееееееень много текста</p>
            <span>Даниил Авсяников, 200 лет назад</span>
        </div>
    )
}

export default QuestionComponent;