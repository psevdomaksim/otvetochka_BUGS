import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "..";
import s from "../css/Auth.module.css";
import { registrationTC } from "../Redux/ActionCreators/authAC";
import { LOGIN_ROUTE } from "../utils/routes_consts";

const Registration = (props) => {
  const store = useContext(StoreContext);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  
  const registration = () => { 
    if (checkbox){
        store.dispatch(registrationTC(fullname, email, password)); 
    } else{
        setErrorMsg("Для регистрации вы должны согласиться с правилами проекта");
    }
     
  };

  const onChange = (event) => {
    setErrorMsg("");

    if (event.target.id == "fullname") {
      setFullname(event.target.value);
    } else if (event.target.id == "email") {
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
          <Col>
            <span id={s.reg_head}>Регистрация</span>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* <Col className="d-flex align-items-center" xs={2}> */}
          <Col>
            <p id={s.text}>Имяㅤ</p>
          </Col>
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="Введите имя"
              className={s.input}
              id="fullname"
              value={fullname}
              onChange={onChange}
            />
          </Col>
          {fullname === "" ? (
            // <Col xs={2} className="d-flex align-items-center">
            <Col>
              <b style={{ color: "red" }}>Введите имя</b>
            </Col>
          ) : (
            <></>
          )}
        </Row>

        <Row className="mb-3">
          {/* <Col className="d-flex align-items-center" xs={2}> */}
          <Col>
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
            // <Col xs={2} className="d-flex align-items-center">
            <Col>
              <b style={{ color: "red" }}>Введите почту</b>
            </Col>
          ) : (
            <></>
          )}
        </Row>

        <Row className="mb-3">
          {/* <Col className="d-flex align-items-center" xs={2}> */}
          <Col>
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
            // <Col xs={2} className="d-flex align-items-center">
            <Col>
              <b style={{ color: "red" }}>Введите пароль</b>
            </Col>
          ) : (
            <></>
          )}
        </Row>

        <Row className="mb-3">
          <Col>
            <span>
              Есть аккаунт?<Link id={s.link} to={LOGIN_ROUTE}> Авторизуйся!</Link>
            </span>
          </Col>
        </Row>
        <Row>
          {/* <Col xs={{ span: 10, offset: 1 }}> */}
          <Col>
            <input  type="checkbox" id={s.checkbox} onClick={()=>checkbox ? setCheckbox(false) : (setCheckbox(true), setErrorMsg(""))} checked={checkbox} />
            <span id={s.check_text}>
              Ознакомлен и согласен с правилами проекта
            </span>
          </Col>
        </Row>
        <Row>
        <Row className="mb-2">  <b style={{ color: "red" }}>{errorMsg}</b></Row>
        {/* <Col md={{ offset: 3 }}> */}
          <Col>
            <Button variant="dark" id={s.reg_button} onClick={registration} type="submit">
              Зарегистрироваться
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
