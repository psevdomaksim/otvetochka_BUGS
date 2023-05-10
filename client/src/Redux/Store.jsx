import { combineReducers, createStore, applyMiddleware } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import thunk from 'redux-thunk';

const Reducers = combineReducers({
  categoryPage: categoryReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;