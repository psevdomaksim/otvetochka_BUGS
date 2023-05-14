import React from "react";
import s from "../../css/UsersQuestion.module.css";
import { FcLike } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa";
import { Col, Row, Stack, Image, Container } from "react-bootstrap";
import { BASE_URL } from "../../utils/baseURL_const";
import { PROFILE_ROUTE, QUESTION_PAGE_ROUTE } from "../../utils/routes_consts";
import { Link } from "react-router-dom";

const UserQuestion = (props) => {
  return (


      <Container className={s.wrapper}>
        <Row>
          <Col>
            <Link to={QUESTION_PAGE_ROUTE + `/${props.question?.id}`}>
              <h4>{props.question?.title}</h4>
            </Link>
          </Col>
          <Col>
            {props.answersCount}<GoReport style={{color:"white"}} size={24} />
          </Col>
        </Row>

        <Row className={s.question_container}>
          <Col xs={1}>
            <Link to={PROFILE_ROUTE + `/${props.question?.userId}`}>
              <Image
                src={BASE_URL + `/${props.question?.userAvatar}`}
                style={{ width: "50px", height: "50px" }}
                roundedCircle
              />
            </Link>
          </Col>

          <Col xs={11}>
            {" "}
            <p>{props.question?.body}</p>{" "}
          </Col>
        </Row>

        <Stack direction="horizontal" gap={4}>
          <span className={s.signature}>{props.question?.user}</span>
          <span className={s.signature}>{props.question?.createdAt}</span>
          <span className={s.signature}>{props.question?.category}</span>
          <span>
          <span style={{color:"white"}}className="me-2">{props.answersCount}</span>
         
          </span>
          <FaCommentDots style={{color:"white"}} size={24} />
        </Stack>
      </Container>

  );
};

export default UserQuestion;
