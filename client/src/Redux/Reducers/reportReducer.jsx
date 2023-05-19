import {
  ADD_REPORT,
  DELETE_REPORT,
  FETCH_ALL_REPORTS,
  FETCH_ANSWER_REPORTS,
  FETCH_QUESTION_REPORTS,
} from "../../utils/AC_consts";

let initialState = {
  allReports: [],
  answerReports: [],
  questionReports: [],
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_REPORTS: {
      state = {
        ...state,
        allReports: action.reports,
      };
      return state;
    }

    case FETCH_QUESTION_REPORTS: {
      state = {
        ...state,
        questionReports: action.reports,
      };
      return state;
    }

    case FETCH_ANSWER_REPORTS: {
      state = {
        ...state,
        answerReports: action.reports,
      };
      return state;
    }

    case DELETE_REPORT: {
      const questionReports = state.questionReports.filter(
        (report) => report.id !== action.reportId
      );
      const answerReports = state.answerReports.filter(
        (report) => report.id !== action.reportId
      );
      state = {
        ...state,
        questionReports: questionReports,
        answerReports: answerReports,
      };
      return state;
    }

    default:
      return state;
  }
};

export default reportReducer;
