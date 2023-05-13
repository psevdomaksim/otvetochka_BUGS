import React from "react";
import s from "../../css/ProfileComponent.module.css"

const ProfileComponent = (props) => {
  return (
    <div className={s.question}>
      <h4>{props.title}</h4>
      <div>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default ProfileComponent;
