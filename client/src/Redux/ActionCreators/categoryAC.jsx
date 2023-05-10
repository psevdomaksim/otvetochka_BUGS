import { fetchCategories } from "../../http/categoryAPI";
import { FETCH_CATEGORIES } from "../../utils/AC_consts";


// fetch users
export const fetchCategoriesAC = (data) => {
    return {
      type: FETCH_CATEGORIES,
      data: data
    };   
}

export const fetchCategoriesTC = () => {
    return (dispatch) => {
      fetchCategories().then((data)=>{
        dispatch(fetchCategoriesAC(data));
      })
    }
}