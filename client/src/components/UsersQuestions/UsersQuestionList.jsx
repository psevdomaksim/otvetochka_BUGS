import React from "react";
import UsersQuestion from "./UsersQuestion";
import s from "../../css/UsersQuestionList.module.css";

const UsersQuestionList = (props) => {
  return (
    <div className={s.list_wrapper}>
      <span id={s.title}>Вопросы пользователей</span>
      <div className={s.items_container}>
        <span>Недавние</span>
        <span>Популярные</span>
        <span>Лучшие</span>
      </div>
      <hr />
      <UsersQuestion />
    </div>
  );
};

export default UsersQuestionList;
