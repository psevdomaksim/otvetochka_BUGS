import React from "react";
import UsersQuestion from "./UsersQuestion";
import s from "../../css/UsersQuestionList.module.css"

const UsersQuestionList = (props) => {
    return(
        <div className={s.list_wrapper}>
            <div>
                <h3>Вопросы пользователей</h3>
            </div>
            <div>
                <span>Недавние</span>
                <span>Популярные</span>
                <span>Лучшие</span>
            </div>
            <UsersQuestion />
        </div>
    )
}

export default UsersQuestionList;