import React from "react";
import ava from "../../img/ava.jpg"
import s from "../../css/UsersQuestion.module.css"

const UsersQuestion = (props) => {
    return(
        <div className={s.wrapper}>
            <div>
                <h4>Название вопроса</h4>
                <div>
                    <img className={s.ava} src={ava} />
                    <p>Подробнее о вопросе</p>
                </div>
                <div>
                    <p>Пользователь, время, категория</p>
                </div>
            </div>
        </div>
    )
}

export default UsersQuestion;