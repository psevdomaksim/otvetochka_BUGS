import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "../../css/Registration.module.css"
import { LOGIN_ROUTE } from "../../utils/routes_consts";

const Registration = (props) => {
    return (
        <div className={s.reg_wrapper}>
            <div className={s.traffic_light}>
                <div className={s.block} id={s.green}>Задавай вопросы</div>
                <div className={s.block} id={s.yellow}>Получай ответы</div>
                <div className={s.block} id={s.red}>Делись мнением</div>
            </div>
            <Container className={s.reg_form}>
                <Row>
                    <Col md="auto" className={s.center}><span id={s.reg_head}>Регистрация</span></Col>
                </Row>
                <Row className={s.indent}>
                    <Col><span id={s.text}>Имя и фамилия</span></Col>
                    <Col><input id={s.input } /></Col>
                </Row>
                <Row className={s.indent}>
                    <Col><span id={s.text}>Почта</span></Col>
                    <Col><input id={s.input } /></Col>
                </Row>
                <Row className={s.indent}>
                    <Col><span id={s.text}>Пароль</span></Col>
                    <Col><input type="password" id={s.input } /></Col>
                </Row>
                <Row>
                    <Col><span>Есть аккаунт?<Link to={LOGIN_ROUTE}> Авторизуйся!</Link></span></Col>
                </Row>
                <Row className={s.indent}>
                    <Col md={{span: 1}}><input type="checkbox" id={s.checkbox} /></Col>
                    <Col><span id={s.check_text}>Ознакомлен и согласен с правилами проекта</span></Col>
                </Row>
                <Row>
                    <Col md={{offset: 3}}><button id={s.reg_button}>Зарегистрироваться</button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registration;