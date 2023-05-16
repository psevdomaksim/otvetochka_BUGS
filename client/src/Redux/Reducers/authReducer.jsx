import {
  API_ERROR,
  LOGIN,
  SET_LOGIN,
  LOG_OUT,
  SET_LOADING,
  UPDATE_PROFILE_DATA,
} from "../../utils/AC_consts";

let initialState = {
  currentLogin: null,
  isAuth: false,
  isLoading: true,
  error: null,
  msg: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      state = {
        ...state,
        currentLogin: action.user,
        isAuth: true,
        isLoading: false,
      };
      return state;
    }

    case LOG_OUT: {
      state = { ...state, currentLogin: null, isAuth: false };
      return state;
    }

    case SET_LOGIN: {
      state = {
        ...state,
        currentLogin: action.user,
        isAuth: true,
        isLoading: false,
      };
      return state;
    }

    case UPDATE_PROFILE_DATA: {

      state = {
        ...state,
        currentLogin: action.user,
        msg: action.msg,
        error: null,
      };
      return state;
    }

    case API_ERROR: {
      
      state = { ...state, error: action.data, msg:null };
      return state;
    }

    case SET_LOADING: {
      state = { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default authReducer;
