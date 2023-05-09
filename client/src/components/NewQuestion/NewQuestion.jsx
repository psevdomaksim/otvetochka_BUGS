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
            <option value="1">Значение 1</option>
            <option value="2">Значение 2</option>
            <option value="3">Значение 3</option>
            <option value="4">Значение 4</option>
            <option value="5">Значение 5</option>
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
      <Row>
        <Col xs={{span: 5, offset: 2}}>
          <button id={s.publish}>Опубликовать</button>
        </Col>
        <Col sx={{span: 2, offset: 5}}>
        <button id={s.return}>Вернуть</button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewQuestion;
