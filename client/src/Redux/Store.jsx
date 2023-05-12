import { combineReducers, createStore, applyMiddleware } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import thunk from 'redux-thunk';
import authReducer from "./Reducers/authReducer";

const Reducers = combineReducers({
  categoryPage: categoryReducer,
  authPage: authReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;