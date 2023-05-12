import { checkAuth, login } from "../../http/authAPI";
import {
  LOGIN,
  API_ERROR,
  SET_LOGIN,
  LOG_OUT,
  SET_LOADING,
} from "../../utils/AC_consts";

//no found error
export const ApiError = (data) => {
  return {
    type: API_ERROR,
    data: data,
  };
};

// login

export const loginAC = (user) => {
  return {
    type: LOGIN,
    user: user,
  };
};

export const loginTC = (email, password) => {
  return (dispatch) => {
    login(email, password)
      .then((user) => {
        dispatch(loginAC(user));
      })
      .catch((err) => {
        dispatch(ApiError(err.response.data.message));
      });
  };
};

// export const registrationThunkCreator = (login, name, password, role) => {
//   return (dispatch) => {

//     fetchOneUserByLogin(login).then((user) => {

//           let newUser = {
//             id: Math.floor(Math.random() * 10000) + 1,
//             login: login,
//             password: bcrypt.hashSync(password, 6),
//             data: {
//               name: name,
//               status: "",
//               avatarImage: "default-image.jpg",
//               ownerPageCover: "default-image.jpg",
//               dateOfBirth: "",
//               city: "",
//               education: ""
//             }
//       }

//       createUser(newUser).then((user) => {
//         generateJWT(user.id, user.login, role).then((token) => {
//           dispatch(loginActionCreator(user, token));
//         }).catch(e=>alert(e));
//       });

//     });

//   };
// };

// // log out

// export const logoutActionCreator = () => {
//   return {
//     type: LOG_OUT
//   };
// };

// set login

export const setLoadingAC = () => {
  return {
    type: SET_LOADING,
  };
};

export const setLoginTC = () => {
  return (dispatch) => {
    if (localStorage.getItem("token")) {
      checkAuth()
        .then((user) => {
          dispatch(loginAC(user));
        })
        .catch((err) => {
          dispatch(ApiError(err.response.data.message));
        });
    } else {
      dispatch(setLoadingAC());
    }
  };
};
