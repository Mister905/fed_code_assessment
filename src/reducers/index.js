import { combineReducers } from "redux";
import work_reducer from "./work_reducer";

export default combineReducers({
  work: work_reducer,
});
