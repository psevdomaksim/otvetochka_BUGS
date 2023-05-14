import React from "react";
import UserQuestion from "./UserQuestion";
import s from "../../css/UsersQuestionList.module.css";

const UserQuestionList = (props) => {
  return (
    <div className={s.list_wrapper}>
      <span id={s.title}>Вопросы пользователей</span>
      <div className={s.items_container}>
        <span>Недавние</span>
        <span>Популярные</span>
        <span>Лучшие</span>
      </div>
      <hr />
      <UserQuestion />
    </div>
  );
};

export default UserQuestionList;
