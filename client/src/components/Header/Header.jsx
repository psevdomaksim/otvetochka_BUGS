import React from "react";
import { Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import s from "../../css/Header.module.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import {
  HOME_PAGE_ROUTE,
  NEW_QUESTION_ROUTE,
  RULES_PAGE_ROUTE,
  REGISTRATION_ROUTE,
  LOGIN_ROUTE
} from "../../utils/routes_consts";

const Header = (props) => {
  return (
    <header>
      <Container className={s.container}>
        <Row className={s.upper_header}>
          <Col md={4}></Col>
          <Col md={{ span: 2, offset: 2 }}><Link to={REGISTRATION_ROUTE}>Регистрация</Link></Col>
          <Col md={{ span: 2, offset: 2 }}><Link to={LOGIN_ROUTE}>Войти</Link></Col>
        </Row>
        <Row className={s.lower_header}>
          <Col xs={3}>
            <Link to={HOME_PAGE_ROUTE}>
              <Image src={logo} />
            </Link>
          </Col>
          <Col xs={2}>
            <Link to={NEW_QUESTION_ROUTE}>Спросить</Link>
          </Col>
          <Col xs={2}>Категории</Col>
          <Col xs={2}>
            <Link to={RULES_PAGE_ROUTE}>Правила</Link>
          </Col>
          <Col xs={3}>
            <Form.Control
              className={s.lower_header_form}
              type="text"
              id="name"
              placeholder="Введите свой вопрос"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
