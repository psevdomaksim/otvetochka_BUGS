import React from "react";
import style from "../../css/AddQuestion.module.css";

const AddQuestionList = (props) => {
  return (
    <div className={style.wrapper}>
      <span id={style.green}>Есть вопрос?</span>
      <span>Спроси у сообщества</span>
      <button id={style.ask_button}>Спросить</button>
    </div>
  );
};

export default AddQuestionList;
