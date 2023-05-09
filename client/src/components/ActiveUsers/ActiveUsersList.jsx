import React from "react";
import ActiveUsers from "./ActiveUsers";

const ActiveUsersList = (props) => {
  return (
    <div>
      <h3>Самые активные пользователи</h3>
      <ActiveUsers />
    </div>
  );
};

export default ActiveUsersList;
