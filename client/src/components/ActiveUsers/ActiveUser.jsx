import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../../css/ActiveUsers.module.css";
import { BASE_URL } from "../../utils/baseURL_const";
import { PROFILE_ROUTE } from "../../utils/routes_consts";

const ActiveUsers = (props) => {
  return (
      <div className={style.wrapper}>
          <Link to={PROFILE_ROUTE + `/${props.user?.id}`}>
            <Image
              src={BASE_URL + `/${props.user?.avatarImage}`}
              style={{ width: "50px", height: "50px" }}
              className="me-2"
              roundedCircle
            />
          </Link>
          <div id={style.container}>
            <p id={style.name}>{props.user?.fullname}</p>
            <p id={style.count_answers}>{props.user?.answersCount} ответов</p>
          </div>
            
      </div>
  );
};

export default ActiveUsers;
