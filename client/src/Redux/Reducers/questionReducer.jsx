import {
  ADD_QUESTION,
  API_ERROR,
  FETCH_ONE_QUESTION,
  FETCH_QUESTIONS,
} from "../../utils/AC_consts";

let initialState = {
  questions: [],
  curQuestion: null,
  count: null,
  error: null,
  msg: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS: {
      state = {
        ...state,
        questions: action.questions.rows,
        count: action.questions.count,
      };
      return state;
    }

    case FETCH_ONE_QUESTION: {
      state = {
        ...state,
        curQuestion: action.question,
      };
      return state;
    }

    case ADD_QUESTION: {
      //state.questions.push(action.question)
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

export default questionReducer;
