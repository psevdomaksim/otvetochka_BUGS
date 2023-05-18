import {
  CLEAR_USERS,
  FETCH_ACTIVE_USERS,
  FETCH_ONE_USER,
  FETCH_USERS
} from "../../utils/AC_consts";

let initialState = {
  allUsers: [],
  activeUsers: [],
  currentUser: null,
  limit: 5,
  page: 1,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_USER: {
      state = { ...state, currentUser: action.user };
      return state;
    }

    case FETCH_USERS: {
      const resultUsers = [...state.allUsers, ...action.users];

      state = {
        ...state,
        allUsers: resultUsers,
      };
      return state;
    }

    case CLEAR_USERS:{
      state = { ...state, page: 1, allUsers: []};
      return state;
    }

    case FETCH_ACTIVE_USERS: {
      state = { ...state, activeUsers: action.data };

      return state;
    }

    default:
      return state;
  }
};

export default userReducer;
