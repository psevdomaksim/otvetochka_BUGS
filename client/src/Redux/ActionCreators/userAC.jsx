import { FETCH_ONE_USER, FETCH_USERS } from "../../utils/AC_consts";
import { fetchOneUser } from "../../http/userAPI";
import { fetchUsers } from "../../http/userAPI";

// fetch users
export const fetchUsersAC = (data) => {
  return {
    type: FETCH_USERS,
    data: data,
  };
};

export const fetchUsersTC = (limit, page) => {
  return (dispatch) => {
    fetchUsers(limit, page)
      .then((data) => {
        dispatch(fetchUsersAC(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//fetch one user
export const fetchOneUserAC = (user) => {
  return {
    type: FETCH_ONE_USER,
    user: user,
  };
};

export const fetchOneUserTC = (id) => {
  return (dispatch) => {
    fetchOneUser(id)
      .then((user) => {
        dispatch(fetchOneUserAC(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
