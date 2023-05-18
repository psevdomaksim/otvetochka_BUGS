import React from "react";
import style from "../css/HomePage.module.css";
import ActiveUsersList from "../components/ActiveUsers/ActiveUserList";
import { NEW_QUESTION_ROUTE } from "../utils/routes_consts";
import { Link } from "react-router-dom";
import UserQuestionList from "../components/UsersQuestions/UserQuestionList";
import { useRef } from "react";

const Home = (props) => {

  const trigger = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className={style.home_page_wrapper}>
        <div>
        <button
          id={style.button_up}
          type="button"
          className="btn btn-outline-success"
          onClick={scrollToTop}
        >
          <i className="bi bi-chevron-up"></i>
        </button>
      </div>
      <div className={style.left_box_wrapper}>
        <div className={style.wrapper}>
          <span id={style.green}>Есть вопрос?</span>
          <span className={style.ask_text}>Спроси у сообщества</span>
          <Link to={NEW_QUESTION_ROUTE}>
            <button type="button" className="btn btn-success">
              Спросить
            </button>
          </Link>
        </div>
        <ActiveUsersList />
      </div>
      <UserQuestionList trigger={trigger}/>
      <div ref={trigger} className="trigger"></div>
      <div className={style.break}></div>
    </div>
  );
};

export default Home;
