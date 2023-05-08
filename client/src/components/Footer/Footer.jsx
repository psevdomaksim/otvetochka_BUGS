import React from "react";
import style from "../../css/Footer.module.css"

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <div>
                <span>Главная</span>
                <span>Создать</span>
                <span>Категории</span>
                <span>Правила</span>
                <span>Пользователь</span>
            </div>
            <div>Some long information</div>
            <div>Разработчики:</div>
        </footer>
    )
}

export default Footer;