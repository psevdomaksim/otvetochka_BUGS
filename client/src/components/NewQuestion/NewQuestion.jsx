import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import s from "../../css/NewQuestion.module.css";

const NewQuestion = (props) => {
  return (
    <Container className={s.quest_wrapper}>
      <Row className={s.item}>
        <Col>
          <span id={s.text}>Задать вопрос</span>
        </Col>
      </Row>
      <Row className={s.item}>
        <Col>
          <span id={s.small_text}>Категория</span>
        </Col>
        <Col>
          <select className={s.select_list} name="category">
            <option value="1">Авто, Мото</option>
            <option value="2">Бизнес, Финансы</option>
            <option value="3">Города и Страны</option>
            <option value="4">Гороскопы, Магия, Гадания</option>
            <option value="5">Досуг, Развлечение</option>
            <option value="6">Еда, Кулинария</option>
            <option value="7">Животные, Растения</option>
            <option value="8">Красота и Здоровье</option>
            <option value="9">Наука, Техника, Языки</option>
            <option value="10">Образование</option>
            <option value="11">Общество, Политика, СМИ</option>
            <option value="12">Семья, Дом, Дети</option>
            <option value="13">Спорт</option>
            <option value="14">Стиль, Мода, Звёзды</option>
            <option value="15">Темы для взрослых</option>
            <option value="16">Товары и услуги</option>
          </select>
        </Col>
      </Row>
      <Row className={s.item}>
        <Col>
          <span id={s.small_text}>Вопрос</span>
        </Col>
        <Col>
          <input className={s.input} />
        </Col>
      </Row>
      <Row className={s.item}>
        <Col>
          <span id={s.small_text}>Текст вопроса</span>
        </Col>
        <Col>
          <textarea className={s.textarea}></textarea>
        </Col>
      </Row>
      <Row className={s.row}>
        <Col className={s.col}>
          <button id={s.publish}>Опубликовать</button>
        </Col>
        <Col className={s.col}>
          <button id={s.return}>Вернуть</button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewQuestion;
