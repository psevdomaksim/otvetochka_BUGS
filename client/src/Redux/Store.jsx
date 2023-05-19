import { combineReducers, createStore, applyMiddleware } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import thunk from 'redux-thunk';
import authReducer from "./Reducers/authReducer";
import userReducer from "./Reducers/userReducer";
import questionReducer from "./Reducers/questionReducer";
import answerReducer from "./Reducers/answerReducer";
import ruleReducer from "./Reducers/ruleReducer";
import reportReducer from "./Reducers/reportReducer";

const Reducers = combineReducers({
  categoryPage: categoryReducer,
  authPage: authReducer,
  userPage: userReducer,
  questionPage: questionReducer,
  answerPage: answerReducer,
  rulePage: ruleReducer,
  reportPage: reportReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;