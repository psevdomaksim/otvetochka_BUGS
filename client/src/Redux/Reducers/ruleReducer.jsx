import { ADD_ANSWER, ADD_RULE, API_ERROR, FETCH_ANSWERS, FETCH_RULES } from "../../utils/AC_consts";

let initialState = {
  rules: [],
  error: null, 
  msg: null
};

const ruleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RULES: {
      state = {
        ...state,
        rules: action.data
      };
      return state;
    }

    case ADD_RULE: {
      state.rules.push(action.rule)
      state = { ...state, error: null, msg: action.message };
      return state;
    }

    case API_ERROR: {
      state = { ...state, error: action.data, msg: null };
      return state;
    }

    default:
      return state;
  }
};

export default ruleReducer;
