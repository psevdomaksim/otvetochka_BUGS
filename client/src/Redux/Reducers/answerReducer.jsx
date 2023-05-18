import { ADD_ANSWER, API_ERROR, CLEAR_ANSWERS, CLEAR_MSG, DISLIKE_ANSWER, FETCH_ANSWERS, FETCH_ANSWERS_COUNT, GET_BEST_ANSWER, LIKE_ANSWER } from "../../utils/AC_consts";

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

    case FETCH_ANSWERS_COUNT:{
      state = {
        ...state,
        count: action.count,
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

    case CLEAR_MSG:{
      state = { ...state, error: null, msg: null };
      return state;
    }

    case CLEAR_ANSWERS:{
      state = { ...state, answers: []};
      return state;
    }

    case LIKE_ANSWER:{
      let answer = state.answers.find((answer) => answer.id === action.data.like.answerId);
      answer.likeCount++;
      answer.isLiked=1;

      return {
        ...state,
        answers: [
          ...state.answers.splice(0, state.answers.indexOf(answer)),
          answer,
          ...state.answers.splice(state.answers.indexOf(answer) + 1) 
          ]
      };
    }

    case DISLIKE_ANSWER:{
      let answer = state.answers.find((answer) => answer.id === action.answerId);
      answer.likeCount--;
      answer.isLiked=0;
      return {
        ...state,
        answers: [
          ...state.answers.splice(0, state.answers.indexOf(answer)),
          answer,
          ...state.answers.splice(state.answers.indexOf(answer) + 1) 
          ]
      };
    }

    default:
      return state;
  }
};

export default answerReducer;
