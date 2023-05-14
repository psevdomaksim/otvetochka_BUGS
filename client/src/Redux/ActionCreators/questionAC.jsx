import { fetchOneCategory } from "../../http/categoryAPI";
import { fetchQuestions } from "../../http/questionAPI";
import { fetchOneUser } from "../../http/userAPI";
import { FETCH_QUESTIONS } from "../../utils/AC_consts";

// fetch users
export const fetchQuestionsAC = (questions) => {
  return {
    type: FETCH_QUESTIONS,
    questions: questions,
  };
};

export const fetchQuestionsTC = (categoryId, userId) => {
  const options = {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
  };

  return (dispatch) => {
    fetchQuestions(categoryId, userId).then(async (questions) => {
      const newq = await Promise.all(
        questions.rows.map(async (question) => {
          const user = await fetchOneUser(question.userId);
          const category = await fetchOneCategory(question.categoryId);

          const date = new Date(Date.parse(question.createdAt));
          question.createdAt = date.toLocaleString("ru", options);
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
