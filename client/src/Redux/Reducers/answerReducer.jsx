import { ADD_ANSWER, API_ERROR, FETCH_ANSWERS, GET_BEST_ANSWER } from "../../utils/AC_consts";

let initialState = {
  answers: [],
  bestAnswer: null,
  count: null,
  error: null, 
  msg: null
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANSWERS: {
      state = {
        ...state,
        answers: action.data.rows,
        count: action.data.count,
      };
      return state;
    }

    case ADD_ANSWER: {
      state.answers.unshift(action.answer)
      state = { ...state, error: null, msg: action.message };
      return state;
    }

    case GET_BEST_ANSWER:{
      state = { ...state, bestAnswer:action.answer};
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

export default answerReducer;
