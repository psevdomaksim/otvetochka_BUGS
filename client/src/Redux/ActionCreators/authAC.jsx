import { checkAuth, login, registration } from "../../http/authAPI";
import { editUserProfile } from "../../http/userAPI";
import {
  LOGIN,
  API_ERROR,
  SET_LOGIN,
  LOG_OUT,
  SET_LOADING,
  UPDATE_PROFILE_DATA,
} from "../../utils/AC_consts";

// error
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

export const registrationTC = (fullname, email, password) => {


  return (dispatch) => {

    registration(fullname, email, password)
    .then((user) => {
      dispatch(loginAC(user));
    })
    .catch((err) => {
      dispatch(ApiError(err.response.data.message));
    });

  };
};

// // log out

export const logoutAC = () => {
  localStorage.removeItem("token");
  return {
    type: LOG_OUT,
  };
};

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
         if(err.response.data.message==="JWT EXPIRED"){
          dispatch(logoutAC());
         }
          dispatch(ApiError(err.response.data.message));
        });
    } else {
      dispatch(setLoadingAC());
    }
  };
};


//edit profile

export const editProfileDataAC = (user) => {

  return {
    type: UPDATE_PROFILE_DATA,
    user: user
  };
};

export const editProfileDataTC = (id, fullname,status, imgFile) => {

  const formData = new FormData();
  formData.append("fullname", fullname);
  formData.append("status", status);
  formData.append("img", imgFile);

  return (dispatch) => {
    editUserProfile(id, formData).then((user)=>{
       dispatch(editProfileDataAC(user));
     })
  }
}