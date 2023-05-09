import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "../../css/Login.module.css"

const Login = (props) => {
    return (
        <div className={s.reg_wrapper}>
            <div className={s.traffic_light}>
                <div className={s.block} id={s.green}>Задавай вопросы</div>
                <div className={s.block} id={s.yellow}>Получай ответы</div>
                <div className={s.block} id={s.red}>Делись мнением</div>
            </div>
            <Container className={s.reg_form}>
                <Row>
                    <Col md="auto" className={s.center}><span id={s.reg_head}>Вход</span></Col>
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
                    <Col md={{span: 3, offset: 3}}><span>Нет аккаунта?</span></Col>
                    <Col md={{span: 4, offset: 0}}><Link to="/reg">Зарегистрируйся</Link></Col>
                </Row>
                <Row>
                    <Col md={{offset: 3}}><button id={s.reg_button}>Войти</button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;