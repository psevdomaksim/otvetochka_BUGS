import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "../../css/Answer.module.css";
import { FcLike } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { BASE_URL } from "../../utils/baseURL_const";
import { PROFILE_ROUTE } from "../../utils/routes_consts";

const Answer = (props) => {
  return (
    <Container className={s.wrapper}>
    <Row className={s.question_container}>
      <Col xs={1}>
        <Link to={PROFILE_ROUTE + `/${props.answer?.userId}`}>
          <Image
            src={BASE_URL + `/${props.answer?.userAvatar}`}
            style={{ width: "50px", height: "50px" }}
            roundedCircle
          />
        </Link>
      </Col>

      <Col xs={10}>
        {" "}
        <p>{props.answer?.body}</p>{" "}
      </Col>

      <Col xs={1}>
      <GoReport style={{color:"white"}} size={24}/>
      </Col>
    </Row>

    <Stack direction="horizontal" style={{color:"#747474"}} gap={4}>
      <span>{props.answer?.user}</span>
      <span>{props.answer?.createdAt}</span>
      <FcLike size={24}/>
    </Stack>
  </Container>
  );
};

export default Answer;
