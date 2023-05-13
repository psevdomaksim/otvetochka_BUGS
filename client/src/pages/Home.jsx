import React from "react";
import UsersQuestionList from "../components/UsersQuestions/UsersQuestionList";
import style from "../css/HomePage.module.css";
import ActiveUsersList from "../components/ActiveUsers/ActiveUsersList";
import { NEW_QUESTION_ROUTE } from "../utils/routes_consts";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className={style.home_page_wrapper}>
      <div className={style.left_box_wrapper}>
        <div className={style.wrapper}>
          <span id={style.green}>Есть вопрос?</span>
          <span className={style.ask_text}>
            <Link to={NEW_QUESTION_ROUTE}>Спроси у сообщества</Link>
          </span>
          <button type="button" class="btn btn-success">
            Спросить
          </button>
        </div>
        <ActiveUsersList />
      </div>
      <UsersQuestionList />
      <div className={style.break}></div>
      <div>
        <button
          id={style.button_up}
          type="button"
          class="btn btn-outline-success"
        >
          <i class="bi bi-chevron-up"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
