import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "../../css/Footer.module.css"

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div className={s.box_link}>
                <NavLink to="/">Главная</NavLink>
                <Link to="/">Создать</Link>
                <Link to="/">Категории</Link>
                <Link to="/">Правила</Link>
                <Link to="/">Пользователь</Link>
            </div>
            <div>Some long information</div>
            <div>Разработчики:</div>
        </footer>
    )
}

export default Footer;