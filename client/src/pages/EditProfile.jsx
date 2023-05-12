import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Col, Row, Image, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { StoreContext } from "..";
import s from "../css/Edit.module.css";
import { editProfileDataTC } from "../Redux/ActionCreators/authAC";
import { BASE_URL } from "../utils/baseURL_const";
import { PROFILE_ROUTE } from "../utils/routes_consts";

const Edit = (props) => {
  const store = useContext(StoreContext);
  const [curLogin, setCurLogin] = useState(
    store.getState().authPage.currentLogin
  );

  const [fullname, setFullname] = useState(
    store.getState().authPage.currentLogin.fullname
  );
  const [status, setStatus] = useState(
    store.getState().authPage.currentLogin.status
  );
  const [img, setImg] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState(store.getState().authPage.msg);
  const [isDisabledPutBtn, setIsDisabledPutBt] = useState(false);

  store.subscribe(() => {
    setCurLogin(store.getState().authPage.currentLogin);
  });

  const imgHandler = (e) => {
    setIsDisabledPutBt(false);
    setShowMsg(false);
    
    e.preventDefault();

    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setImgFile(e.target.files[0]);
  };

  const onChange = (event) => {
    setIsDisabledPutBt(false);
    setShowMsg(false);

    if (event.target.id == "fullname") {
      setFullname(event.target.value);
    } else if (event.target.id == "status") {
      setStatus(event.target.value);
    }
  };

  const editProfile = () => {
    store.dispatch(editProfileDataTC(curLogin.id, fullname, status, imgFile));
    setIsDisabledPutBt(true);
    setShowMsg(true);
    setImg("")
  };

  return (
    <Container className={s.edit_wrapper}>
      <Row>
        <Col>
          <h2>Редактирование профиля</h2>
        </Col>
      </Row>
      <Row className={s.name_row}>
        <Col>
          <span>Имя и Фамилия</span>
        </Col>
        <Col>
          <Form.Control id="fullname" value={fullname} onChange={onChange} />
        </Col>
      </Row>
      <Row className={s.name_row}>
        <Col>
          <span>Статус</span>
        </Col>
        <Col>
          <Form.Control id="status" value={status} onChange={onChange} />
        </Col>
      </Row>
      <Row>
        <Col xs={3} className="d-flex align-items-center">
          <Form.Control type="file" onChange={imgHandler} />
        </Col>
      </Row>
      <Row className={s.name_row}>
        <Col md={{ span: 2, offset: 2 }}>
          <Image
            src={
              BASE_URL +
              `/${store.getState().authPage.currentLogin?.avatarImage}`
            }
            style={{ width: "150px", height: "150px" }}
            roundedCircle
          />
        </Col>
        <Col md={{ span: 2, offset: 2 }}>
          {img ? (
            <Image
              src={img}
              style={{ width: "150px", height: "150px" }}
              roundedCircle
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 2, offset: 2 }}>
          {isDisabledPutBtn ? (
            <Button disabled id={s.save_button}>Сохранить</Button>
          ) : (
            <Button id={s.save_button} onClick={editProfile}>
              Сохранить
            </Button>
          )}
        </Col>
        <Col md={{ span: 2, offset: 2 }}>
          <Link to={PROFILE_ROUTE + `/${curLogin?.id}`}>
            <Button id={s.back_button}>Вернуться</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Edit;
