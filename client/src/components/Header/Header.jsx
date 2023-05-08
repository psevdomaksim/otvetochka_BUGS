import React from "react";
import s from "../../css/Header.module.css";
import logo from "../../img/logo.png";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.upper_header}>
        <button>Светлая тема</button>
        <button>Регистрация</button>
        <button>Войти</button>
      </div>
      <div className={s.lower_header}>
        <img src={logo} />
        <div>
          <button>Спросить</button>
          <button>Категории</button>
          <button>Правила</button>
        </div>
        <div>
            <input placeholder="Введите свой вопрос" />
        </div>
      </div>
    </header>
  );
};

export default Header;
