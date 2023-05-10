import React from "react";
import style from "../../css/ActiveUsers.module.css";
import ava from "../../img/ava.jpg";

const ActiveUsers = (props) => {
  return (
      <div className={style.wrapper}>
          <img className={style.ava} src={ava} />
          <div id={style.container}>
            <p id={style.name}>Евгений Торгоня</p>
            <p id={style.count_answers}>1000 ответов</p>
          </div>
            
      </div>
  );
};

export default ActiveUsers;
