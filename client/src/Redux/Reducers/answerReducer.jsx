import { FETCH_ANSWERS } from "../../utils/AC_consts";

let initialState = {
  answers: [],
  count: null,
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

    default:
      return state;
  }
};

export default answerReducer;
