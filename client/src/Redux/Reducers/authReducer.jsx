import { API_ERROR, LOGIN, SET_LOGIN, LOG_OUT, SET_LOADING } from "../../utils/AC_consts";

let initialState = {
  currentLogin: null,
  isAuth: false,
  isLoading: true,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:{    
      state = { ...state, currentLogin: action.user, isAuth: true, isLoading: false};
      return state;
    }

    case LOG_OUT:{

      state = { ...state, currentLogin: null, isAuth: false};
      return state;
    }

    case SET_LOGIN:{    
      state = { ...state, currentLogin: action.user, isAuth: true, isLoading: false};
      return state;
    }

    case API_ERROR:{
      state = { ...state, error: action.data };
      return state;
    }

    case SET_LOADING:{
      state = { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default authReducer;