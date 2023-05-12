import { fetchQuestions } from "../../http/questionAPI";
import { FETCH_QUESTIONS } from "../../utils/AC_consts";


// fetch users
export const fetchQuestionsAC = (data) => {
    return {
      type: FETCH_QUESTIONS,
      data: data
    };   
}

export const fetchQuestionsTC = (categoryId, userId) => {
    return (dispatch) => {
      fetchQuestions(categoryId, userId).then((data)=>{
        dispatch(fetchQuestionsAC(data));
      })
    }
}