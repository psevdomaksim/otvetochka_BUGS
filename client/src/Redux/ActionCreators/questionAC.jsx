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
   fetchQuestions(categoryId, userId).then((questions) => {



       questions.rows.map(async (question) => {

        //let closest = Object.assign({}, questions.rows[i]);

        const date = new Date(Date.parse(question.createdAt));
        question.createdAt = date.toLocaleString("ru", options);

        // question.user = "";
        // question.userAvatar = "";
        // question.category = "";

        const user = await fetchOneUser(question.userId);

        question.user = user.fullname;
        question.userAvatar = user.avatarImage;

        const category = await fetchOneCategory(question.categoryId);
        question.category = category.name;

        console.log(question.user);

      })

      console.log(questions.rows);
      console.log(questions.rows[0].user);
      
      dispatch(fetchQuestionsAC(questions))

    });


  };
};
