import { fetchAnswers } from "../../http/answerAPI";
import { FETCH_ANSWERS } from "../../utils/AC_consts";


// fetch users
export const fetchAnswersAC = (data) => {
    return {
      type: FETCH_ANSWERS,
      data: data
    };   
}

export const fetchAnswersTC = (questionId, userId) => {
    return (dispatch) => {
      fetchAnswers(questionId, userId).then((data)=>{
        dispatch(fetchAnswersAC(data));
      })
    }
}