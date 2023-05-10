import React from "react";
import ActiveUsers from "./ActiveUsers";
import s from "../../css/ActiveUsersList.module.css";

const ActiveUsersList = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <span>Самые активые</span>
        <span>Пользователи</span>
      </div>
      <ActiveUsers />
    </div>
  );
};

export default ActiveUsersList;
