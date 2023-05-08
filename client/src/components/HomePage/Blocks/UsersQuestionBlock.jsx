import React from "react";
import ava from "../../../img/ava.jpg"
import style from "../../../css/UsersQuestionBlock.module.css"

const UsersQuestionBlock = (props) => {
    return(
        <div className={style.wrapper}>
            <div>
                <h3>Вопросы пользователей</h3>
            </div>
            <div>
                <span>Недавние</span>
                <span>Популярные</span>
                <span>Лучшие</span>
            </div>
            <div>
                <h4>Название вопроса</h4>
                <div>
                    <img className={style.ava} src={ava} />
                    <p>Подробнее о вопросе</p>
                </div>
                <div>
                    <p>Пользователь, время, категория</p>
                </div>
            </div>
        </div>
    )
}

export default UsersQuestionBlock;