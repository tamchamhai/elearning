import { combineReducers } from "redux";
import commonReducer from "./common.reducer";
import courseReducer from "./courses.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  loading: commonReducer,
  user: userReducer,
});

export default rootReducer;
