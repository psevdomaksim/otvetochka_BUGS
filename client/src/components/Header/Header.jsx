import React from "react";
import { DropdownButton, Form, Image, Dropdown, ButtonGroup, Button } from "react-bootstrap";
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
import { useContext } from "react";
import { StoreContext } from "../..";
import { fetchCategoriesTC } from "../../Redux/ActionCreators/categoryAC";
import { useEffect } from "react";
import { useState } from "react";

import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { logoutAC } from "../../Redux/ActionCreators/authAC";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";



const Header = () => {
  const store = useContext(StoreContext);

  const [categories, setCategories] = useState([])
  const [isAuth, setAuth] = useState(false)

  const fetchCategories = () => {
    store.dispatch(fetchCategoriesTC());
  };


  useEffect(() => {
    fetchCategories();
  }, []);


  store.subscribe(() => {
    setCategories(store.getState().categoryPage.categories);
    setAuth(store.getState().authPage.isAuth)
  });

  const logout = () =>{
    store.dispatch(logoutAC());
  }


  return (
    <header>
      <Container className={s.container}>
        <Row>
          {isAuth ? (
            <Col className={s.upper_header}>
              <Button size="sm" onClick={logout}>
                Выйти
              </Button>
            </Col>
          ) : (
            <>
              <Col className={s.upper_header}>
                <Link to={REGISTRATION_ROUTE}>Регистрация</Link>
                <Link to={LOGIN_ROUTE}>Войти</Link>
              </Col>
            </>
          )}
        </Row>
        <Row className={s.lower_header}>
          <Col xs={2}>
            <Link to={HOME_PAGE_ROUTE}>
              <Image src={logo} />
            </Link>
          </Col>
          <Col xs={2}>
            <Link to={NEW_QUESTION_ROUTE}>Спросить</Link>
          </Col>
          <Col xs={3}>
            <Dropdown>
              <DropdownToggle variant="success" id="dropdown-basic">
                Категории
              </DropdownToggle>
              <DropdownMenu>
              {categories.map((category)=>(
                <DropdownItem eventKey={category.id}>{category.name}</DropdownItem>
              ))}
              </DropdownMenu>
            </Dropdown>
          </Col>
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
