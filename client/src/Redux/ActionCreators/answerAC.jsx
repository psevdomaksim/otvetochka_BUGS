import { fetchAnswers } from "../../http/answerAPI";
import { fetchOneCategory } from "../../http/categoryAPI";
import { fetchOneUser } from "../../http/userAPI";
import { DATE_OPTIONS, FETCH_ANSWERS } from "../../utils/AC_consts";


// fetch users
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
            const date = new Date(Date.parse(answer.createdAt));
            answer.createdAt = date.toLocaleString("ru", DATE_OPTIONS);
            answer.user = user.fullname;
            answer.userAvatar = user.avatarImage;
          })
        ).then(() => {
          dispatch(fetchAnswersAC(answers));
        });
      });
    }
}