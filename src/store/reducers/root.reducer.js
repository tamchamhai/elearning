import { combineReducers } from "redux";
import commonReducer from "./common.reducer";
import courseReducer from "./courses.reducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  loading: commonReducer,
});

export default rootReducer;
