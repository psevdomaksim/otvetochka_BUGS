import React from "react";
import s from "../../css/ProfileComponent.module.css"

const ProfileComponent = (props) => {
  return (
    <div className={s.question}>
      <h4>{props.title}</h4>
      <div>
        <p>{props.body}</p>
        12433333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333
      </div>
    </div>
  );
};

export default ProfileComponent;
