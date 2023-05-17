import { addNewAnswer, fetchAnswers } from "../../http/answerAPI";
import { fetchAnswerLikes } from "../../http/answerLikeAPI";
import { fetchOneCategory } from "../../http/categoryAPI";
import { fetchOneUser } from "../../http/userAPI";
import {
  ADD_ANSWER,
  API_ERROR,
  CLEAR_MSG,
  DATE_OPTIONS,
  FETCH_ANSWERS,
  GET_BEST_ANSWER,
} from "../../utils/AC_consts";

// error
export const ApiError = (data) => {
  return {
    type: API_ERROR,
    data: data,
  };
};

// fetch answers
export const fetchAnswersAC = (data) => {
  return {
    type: FETCH_ANSWERS,
    data: data,
  };
};

export const fetchAnswersTC = (questionId, userId) => {
  return (dispatch) => {
    fetchAnswers(questionId, userId)
      .then((answers) => {
        answers.rows.map((answer) => {
          const date = new Date(Date.parse(answer.createdAt));
          answer.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
        });
        if (answers.rows.length !== 0) {
           dispatch(getBestAnswerAC(answers.rows.reduce((prev, current) =>+prev.likeCount > +current.likeCount ? prev : current))
          )
        } else {
          dispatch(getBestAnswerAC(null));
        }
        dispatch(fetchAnswersAC(answers));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//get best answer

export const getBestAnswerAC = (answer) => {
  return {
    type: GET_BEST_ANSWER,
    answer: answer,
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MSG,
  };
};


// add new answer

export const addNewAnswerAC = (data) => {
  return {
    type: ADD_ANSWER,
    answer: data.answer,
    message: data.message,
  };
};

export const addNewAnswerTC = (body, questionId) => {
  return (dispatch) => {
    addNewAnswer(body, questionId)
      .then((data) => {
        const date = new Date(Date.parse(data.answer.createdAt));
        data.answer.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
        dispatch(addNewAnswerAC(data));
      })
      .catch((err) => {
        dispatch(ApiError(err.response.data.message));
      });
  };
};
