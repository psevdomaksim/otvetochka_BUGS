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


const Header = () => {
  const store = useContext(StoreContext);

  const [categories, setCategories] = useState([])

  const fetchCategories = () => {
    store.dispatch(fetchCategoriesTC());
  };


  useEffect(() => {
    fetchCategories();
  }, []);


  store.subscribe(() => {
    setCategories(store.getState().categoryPage.categories);
  });


  return (
    <header>
      <Container className={s.container}>
        <Row>
          <Col className={s.upper_header}>
            <Link to={REGISTRATION_ROUTE}>Регистрация</Link>
            <Link to={LOGIN_ROUTE} style={{textDecoration: 'none'}}><Button size="sm" variant="success" id={s.enter_button}>Войти</Button></Link>
          </Col>
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
            <DropdownButton variant="dark">
              {categories.map((category)=>(
                <DropdownItem eventKey={category.id}>{category.name}</DropdownItem>
              ))}
            </DropdownButton>
          {/* <select className={s.select_list} name="Категории">
              {
                categories.map((category)=>(
                  <option value={category.id}>{category.name}</option>
                ))
              }
            </select> */}
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
