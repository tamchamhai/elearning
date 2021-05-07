import { combineReducers } from "redux";
import adminReducer from "./admin.reducer";
import commonReducer from "./common.reducer";
import courseReducer from "./courses.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  loading: commonReducer,
  user: userReducer,
  admin: adminReducer,
});

export default rootReducer;
