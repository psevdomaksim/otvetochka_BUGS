import React from "react";
import style from "./ActiveUsersBlock.module.css";
import ava from "../../../img/ava.jpg";

const ActiveUsersBlock = (props) => {
  return (
    <div>
      <div className={style.wrapper}>
        <h3>Самые активные пользователи</h3>
        <div>
          <img className={style.ava} src={ava} />
          <div>
            <p>Евгений Торгоня</p>
            <p>1000 ответов</p>
          </div>
        </div>
        <div>
          <img className={style.ava} src={ava} />
          <div>
            <p>Евгений Торгоня</p>
            <p>1000 ответов</p>
          </div>
        </div>
        <div>
          <img className={style.ava} src={ava} />
          <div>
            <p>Евгений Торгоня</p>
            <p>1000 ответов</p>
          </div>
        </div>
        <div>
          <img className={style.ava} src={ava} />
          <div>
            <p>Евгений Торгоня</p>
            <p>1000 ответов</p>
          </div>
        </div>
        <div>
          <img className={style.ava} src={ava} />
          <div>
            <p>Евгений Торгоня</p>
            <p>1000 ответов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersBlock;
