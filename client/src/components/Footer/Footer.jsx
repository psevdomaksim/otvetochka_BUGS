import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "../../css/Footer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import evg from "../../img/evg.png";
import morvus from "../../img/morvus.png";
import dan from "../../img/dan.png";
import edelweiss from "../../img/edelweiss.png";

const Footer = (props) => {
  return (
    <footer className={s.footer}>
      <Container>
        <Row>
          <Col xs={{span: 2, offset: 0}}  className={s.box_link}>
            <Link to="/">Главная</Link>
            <Link to="/">Создать</Link>
            <Link to="/">Категории</Link>
            <Link to="/">Правила</Link>
            <Link to="/">Пользователь</Link>
          </Col>
          <Col xs="8" className={s.desc}>
            Ответ.by - сайт, созданный в мае 2023 года, с целью актуализации
            сайтов по поиску вопросов и ответов на различные темы, а так же
            перестроения их на современный лад. Проект Ответ.by создан
            исключительно в ознакомительных целях, все совпадения с реальными
            личностями случайны. Ответ.by имеет за собой право заблокировать
            пользователя в случае не соблюдения правил проекта.
          </Col>
          <Col className={s.dev_wrapper} xs={{offset: 2, span: 2}}>
            Разработчики:
            <div className={s.dev}>
              <img src={evg} />
              <img src={morvus} />
            </div>
            <div className={s.dev}>
              <img src={edelweiss} />
              <img src={dan} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
