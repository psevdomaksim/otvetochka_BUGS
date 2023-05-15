import { fetchOneCategory } from "../../http/categoryAPI";
import {
  addNewQuestion,
  fetchOneQuestion,
  fetchQuestions,
} from "../../http/questionAPI";
import { fetchOneUser } from "../../http/userAPI";
import {
  ADD_QUESTION,
  API_ERROR,
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

export const fetchQuestionsTC = (categoryId, userId) => {
  return (dispatch) => {
    fetchQuestions(categoryId, userId).then(async (questions) => {
      await Promise.all(
        questions.rows.map(async (question) => {
          const user = await fetchOneUser(question.userId);
          const category = await fetchOneCategory(question.categoryId);

          const date = new Date(Date.parse(question.createdAt));
          question.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
          question.user = user.fullname;
          question.userAvatar = user.avatarImage;
          question.category = category.name;
        })
      ).then(() => {
        dispatch(fetchQuestionsAC(questions));
      });
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
    fetchOneQuestion(id).then(async (question) => {

        const user = await fetchOneUser(question.userId);
        const category = await fetchOneCategory(question.categoryId);

        const date = new Date(Date.parse(question.createdAt));
        question.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
        question.user = user.fullname;
        question.userAvatar = user.avatarImage;
        question.category = category.name;
       
        dispatch(fetchOneQuestionAC(question));
      })
      
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
        dispatch(ApiError(err.response.data.message));
      });
  };
};
