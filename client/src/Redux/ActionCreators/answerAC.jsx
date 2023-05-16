import { addNewAnswer, fetchAnswers } from "../../http/answerAPI";
import { fetchAnswerLikes } from "../../http/answerLikeAPI";
import { fetchOneCategory } from "../../http/categoryAPI";
import { fetchOneUser } from "../../http/userAPI";
import { ADD_ANSWER, API_ERROR, DATE_OPTIONS, FETCH_ANSWERS } from "../../utils/AC_consts";

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
      data: data
    };   
}

export const fetchAnswersTC = (questionId, userId) => {
    return (dispatch) => {
      fetchAnswers(questionId, userId).then(async (answers) => {
        await Promise.all(
          answers.rows.map(async (answer) => {
            const user = await fetchOneUser(answer.userId);
            const likeCount = await fetchAnswerLikes(answer.id);
            const date = new Date(Date.parse(answer.createdAt));
            answer.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
            answer.user = user.fullname;
            answer.userAvatar = user.avatarImage;
            answer.likeCount = likeCount.count;
          })
        ).then(() => {
          dispatch(fetchAnswersAC(answers));
        });
      });
    }
}



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
      .then(async(data) => {
        const user = await fetchOneUser(data.answer.userId);
        const date = new Date(Date.parse(data.answer.createdAt));
        data.answer.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
        data.answer.user = user.fullname;
        data.answer.userAvatar = user.avatarImage;
        dispatch(addNewAnswerAC(data));
      })
      .catch((err) => {
        dispatch(ApiError(err.response.data.message));
      });
  };
};