import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import s from "../../css/Edit.module.css"
import ava from "../../img/ava.jpg"

const Edit = (props) => {
    return (
        <Container className={s.edit_wrapper}>
            <Row>
                <Col><h2>Редактирование профиля</h2></Col>
            </Row>
            <Row className={s.name_row}>
                <Col>
                    <span>Имя и Фамилия</span>
                </Col>
                <Col><input /></Col>
            </Row>
            <Row className={s.name_row}>
                <Col>
                    <span>Статус</span>
                </Col>
                <Col>
                    <input id={s.status} />
                </Col>
            </Row>
            <Row>
                <Col><button id={s.change_photo}>Изменить фото</button></Col>
            </Row>
            <Row className={s.name_row}>
                <Col md={{span: 2, offset: 2}}>
                    <img id={s.large_photo} src={ava} />
                </Col>
                <Col md={{span: 2, offset: 2}}>
                    <img id={s.large_photo} src={ava} />
                </Col>
                <Col md={{span: 2, offset: 1}}>
                    <img id={s.small_photo} src={ava} />
                </Col>
            </Row>
            <Row>
                <Col md={{span:2, offset: 2}}>
                    <button id={s.save_button}>Сохранить</button>
                </Col>
                <Col md={{span:2, offset: 2}}>
                    <button id={s.back_button}>Вернуться</button>
                </Col>
            </Row>

        </Container>
    )
}

export default Edit;