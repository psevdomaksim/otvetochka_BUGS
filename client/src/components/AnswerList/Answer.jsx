import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "../../css/Answer.module.css";
import { FcLike, FcDislike } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { BASE_URL } from "../../utils/baseURL_const";
import { PROFILE_ROUTE } from "../../utils/routes_consts";

const Answer = (props) => {
  return (
    <Container className="mb-3">
    <Row className="mb-2">
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
    <Row className="mb-2">
    <Stack className="mb-2" direction="horizontal" style={{color:"#747474"}} gap={4}>
      <span>{props.answer?.user}</span>
      <span>{props.answer?.createdAt}</span>
      <span style={{color:"white", marginRight:"-20px"}}>{props.answer?.likeCount}</span>
      
      <FcLike size={24}/>
    </Stack>
    <hr style={{border: "#747474 2px solid"}} />
    </Row> 
   
  </Container>
  );
};

export default Answer;
