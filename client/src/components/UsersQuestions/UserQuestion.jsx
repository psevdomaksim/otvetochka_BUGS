import React from "react";
import ava from "../../img/ava.jpg";
import s from "../../css/UsersQuestion.module.css";
import { FcLike } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa";
import { Col, Row, Stack, Image } from "react-bootstrap";
import { BASE_URL } from "../../utils/baseURL_const";

const UserQuestion = (props) => {
  return (
    <div className={s.wrapper}>
      <div>
        <Row>
        <Col><h4>{props.question.title}</h4></Col>
        <Col><GoReport size={24}/></Col> 
      
        
        </Row>
    
        <Row className={s.question_container}>
            <Col xs={2} >
            <Image
             src={BASE_URL + `/${props.question?.userAvatar}`}
           
            style={{ width: "50px", height: "50px" }}
            roundedCircle
          />
            </Col>
         
            <Col xs={10}> <p>{props.question.body}</p> </Col>
        </Row>

        <Stack direction="horizontal" gap={4}>
          <span className={s.signature}>{props.question?.user}</span>
          <span className={s.signature}>{props.question?.createdAt}</span>
          <span className={s.signature}>{props.question?.category}</span>

          <FcLike size={24} className="ms-auto" />
         <FaCommentDots size={24}/>
        </Stack>
      </div>
    </div>
  );
};

export default UserQuestion;
