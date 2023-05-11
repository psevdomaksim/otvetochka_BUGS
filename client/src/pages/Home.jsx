import React from "react";
import UsersQuestionList from "../components/UsersQuestions/UsersQuestionList";
import style from "../css/HomePage.module.css";
import ActiveUsersList from "../components/ActiveUsers/ActiveUsersList";
import { NEW_QUESTION_ROUTE } from "../utils/routes_consts";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = (props) => {
  return (
    <div className={style.home_page_wrapper}>
      <div>
        <div className={style.wrapper}>
          <span id={style.green}>Есть вопрос?</span>

          <span>Спроси у сообщества</span>

          <Link to={NEW_QUESTION_ROUTE}>
            <Button id={style.ask_button}>Спросить</Button>
          </Link>
        </div>
        <ActiveUsersList />
      </div>
      <UsersQuestionList />
      <div className={style.break}></div>
      <div>
        <button>Типа стрелка вверх</button>
      </div>
    </div>
  );
};

export default Home;
