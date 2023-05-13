import { FETCH_QUESTIONS } from "../../utils/AC_consts";

let initialState = {
  questions: [],
  count: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS: {
      state = {
        ...state,
        questions: action.data.rows,
        count: action.data.count,
      };
      return state;
    }

    default:
      return state;
  }
};

export default questionReducer;
