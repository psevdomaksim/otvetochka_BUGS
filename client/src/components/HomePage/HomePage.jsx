import React from "react";
import ActiveUsersBlock from "./Blocks/ActiveUsersBlock";
import AddQuestionBlock from "./Blocks/AddQuestionBlock";
import UsersQuestionBlock from "./Blocks/UsersQuestionBlock";
import style from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={style.home_page_wrapper}>
      <div>
        <AddQuestionBlock />
        <ActiveUsersBlock />
      </div>
      <div>
        <UsersQuestionBlock />
      </div>
      <div>
        <button>Типа стрелка вверх</button>
      </div>
    </div>
  );
};

export default HomePage;
