import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "..";
import s from "../css/Login.module.css";
import { loginTC } from "../Redux/ActionCreators/authAC";
import { REGISTRATION_ROUTE } from "../utils/routes_consts";

const Login = (props) => {
  const store = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const login = () => {
    if (email !== "" && password !== "") {
      store.dispatch(loginTC(email, password));
    } else {
      setErrorMsg(true);
    }
  };

  const onChange = (event) => {
    setErrorMsg("");

    if (event.target.id == "email") {
      setEmail(event.target.value);
    } else if (event.target.id == "password") {
      setPassword(event.target.value);
    }
  };


  store.subscribe(() => {
    setErrorMsg(store.getState().authPage.error);
  });

  return (
    <div className={s.reg_wrapper}>
      <div className={s.traffic_light}>
        <div className={s.block} id={s.green}>
          Задавай вопросы
        </div>
        <div className={s.block} id={s.yellow}>
          Получай ответы
        </div>
        <div className={s.block} id={s.red}>
          Делись мнением
        </div>
      </div>
      <Container className={s.reg_form}>
        <Row className="mb-4">
          <Col xs={12}>
            <h3 className="m-auto" id={s.reg_head}>
              Вход
            </h3>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="d-flex align-items-center" xs={2}>
            <p id={s.text}>Почта</p>
          </Col>
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="Введите почту"
              className={s.input}
              id="email"
              value={email}
              onChange={onChange}
            />
          </Col>
          {email === "" ? (
              <Col xs={2} className="d-flex align-items-center">
                <b style={{ color: "red" }}>Введите почту</b>
              </Col>
            ) : (
              <></>
            )}
        </Row>
        <Row className="mb-3">
          <Col className="d-flex align-items-center" xs={2}>
            <p id={s.text}>Пароль</p>
          </Col>
          <Col xs={8}>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              className={s.input}
              id="password"
              value={password}
              onChange={onChange}
            />
          </Col>
          {password === "" ? (
              <Col xs={2} className="d-flex align-items-center">
                <b style={{ color: "red" }}>Введите пароль</b>
              </Col>
            ) : (
              <></>
            )}
        </Row>
        <Row className="d-flex justify-content-between mt-3 pr-3 pl-3">

            <span>
              Нет аккаунта?
              <Link to={REGISTRATION_ROUTE}>Зарегистрируйся!!</Link>
            </span>

        </Row>
        <Row>
          <Col xs={12}>
            <button id={s.reg_button} onClick={login}>
              Войти
            </button>
          </Col>
        </Row>
        <Row>
          {errorMsg}
        </Row>
      </Container>
    </div>
  );
};

export default Login;
