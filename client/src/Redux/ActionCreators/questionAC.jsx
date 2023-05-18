
import {
  addNewQuestion,
  fetchOneQuestion,
  fetchQuestions,
} from "../../http/questionAPI";
import {
  ADD_QUESTION,
  API_ERROR,
  CLEAR_MSG,
  CLEAR_QUESTIONS,
  DATE_OPTIONS,
  FETCH_ONE_QUESTION,
  FETCH_QUESTIONS,
} from "../../utils/AC_consts";

// error
export const ApiError = (data) => {
  return {
    type: API_ERROR,
    data: data,
  };
};

// fetch questions
export const fetchQuestionsAC = (questions) => {
  return {
    type: FETCH_QUESTIONS,
    questions: questions,
  };
};

export const fetchQuestionsTC = (categoryId, userId, limit, page) => {
  return (dispatch) => {
    fetchQuestions(categoryId, userId, limit, page)
      .then((questions) => {
        questions.rows.map((question) => {
          const date = new Date(Date.parse(question.createdAt));
          question.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
        });
        dispatch(fetchQuestionsAC(questions));
      })
      .catch((err) => {
        console.log(err)
      });
  };
};

// fetch one question
export const fetchOneQuestionAC = (question) => {
  return {
    type: FETCH_ONE_QUESTION,
    question: question,
  };
};

export const fetchOneQuestionTC = (id) => {
  return (dispatch) => {
    fetchOneQuestion(id).then((question) => {
      const date = new Date(Date.parse(question.createdAt));
      question.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
      dispatch(fetchOneQuestionAC(question));
    });
  };
};

///

export const clearQuestionsAC = () => {
  return {
    type: CLEAR_QUESTIONS,
  };
};

///
export const clearQuestionMessagesAC = () => {
  return {
    type: CLEAR_MSG,
  };
};

// add new questions

export const addNewQuestionAC = (data) => {
  return {
    type: ADD_QUESTION,
    question: data.question,
    message: data.message,
  };
};

export const addNewQuestionTC = (title, body, categoryId) => {
  return (dispatch) => {
    addNewQuestion(title, body, categoryId)
      .then((data) => {
        dispatch(addNewQuestionAC(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(ApiError(err.response.data.message));
      });
  };
};
